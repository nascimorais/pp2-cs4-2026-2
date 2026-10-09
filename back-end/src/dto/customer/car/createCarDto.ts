export interface CreateCarDto {
  brand: string;
  model: string;
  color: string;
  year_manufacture: number;
  imported?: boolean;
  plates: string;
  selling_price: number;
}