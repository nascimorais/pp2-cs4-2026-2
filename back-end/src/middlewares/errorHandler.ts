import type { ErrorRequestHandler } from "express";

import { AppError } from "../errors/AppError";

type PrismaError = Error & {
  code?: string;
  meta?: {
    target?: string[];
  };
};

function isPrismaError(error: unknown): error is PrismaError {
  return error instanceof Error && "code" in error;
}

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error instanceof AppError) {
    res.status(error.statusCode).json({ error: error.message });
    return;
  }

  if (isPrismaError(error) && error.code === "P2002") {
    const target = error.meta?.target?.[0];
    const field = target === "ident_document" ? "documento de identidade" : target;
    const message = field
      ? `Já existe um cliente com este ${field}.`
      : "Já existe um cliente com um dos dados informados.";

    res.status(409).json({ error: message });
    return;
  }

  console.error(error);
  res.status(500).json({ error: "Erro interno do servidor." });
};

export default errorHandler;