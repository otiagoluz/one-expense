import { Expense } from '../../expenses/expense/expense';

export interface Report {
  id: string,
  description: string,
  total: number,
  details: Expense[]
}