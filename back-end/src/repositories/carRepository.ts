import { prisma } from "../database/client";
import { CreateCarDto } from "../dto/car/createCarDto";
import { UpdateCarDto } from "../dto/car/updateCarDto";

export async function create(data: CreateCarDto) {
  return await prisma.car.create({
    data,
  });
}

export async function findById(id: number) {
  return await prisma.car.findUnique({
    where: { id },
  });
}

export async function findAll() {
  return await prisma.car.findMany();
}

export async function updateById(id: number, data: UpdateCarDto) {
  return await prisma.car.update({
    where: { id },
    data,
  });
}

export async function deleteById(id: number) {
  return await prisma.car.delete({
    where: { id },
  });
}