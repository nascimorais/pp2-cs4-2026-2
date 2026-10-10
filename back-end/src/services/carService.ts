import * as repository from "../repositories/carRepository";
import { CreateCarDto } from "../dto/customer/car/createCarDto";
import { UpdateCarDto } from "../dto/customer/car/updateCarDto";
import { NotFoundError } from "../errors/NotFoundError";

export async function findAll() {
  return repository.findAll();
}

export async function findById(id: number) {
  const car = await repository.findById(id);
  if (!car) {
    throw new NotFoundError("Carro não encontrado.");
  }
  return car;
}

export async function create(data: CreateCarDto) {
  return repository.create(data);
}

export async function update(id: number, data: UpdateCarDto) {
  await findById(id);
  return repository.updateById(id, data);
}

export async function remove(id: number) {
  await findById(id);
  return repository.deleteById(id);
}
