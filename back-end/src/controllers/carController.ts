import { Request, Response, NextFunction } from "express";
import * as service from "../services/carService";

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await service.create(req.body);
    return res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await service.findAll();
    return res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function findById(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const result = await service.findById(id);
    return res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    const result = await service.update(id, req.body);
    return res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);
    await service.remove(id);
    return res.status(204).send();
  } catch (error) {
    next(error);
  }
}