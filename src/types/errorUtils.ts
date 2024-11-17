import { AxiosError } from "axios";

export interface ResponseData {
  message?: string; // Поле для сообщения об ошибке
  [key: string]: string | number | object | undefined; // Укажите допустимые типы
}

/**
 * Проверяет, является ли ошибка валидной AxiosError с определенной структурой данных.
 * @param error - Любая ошибка
 * @returns true, если это AxiosError<ResponseData>
 */
export function isValidatedAxiosError(
  error: unknown
): error is AxiosError<ResponseData> {
  return (
    typeof error === "object" && // Убедимся, что это объект
    error !== null && // Исключаем null
    "isAxiosError" in error && // Проверяем наличие флага isAxiosError
    (error as AxiosError).isAxiosError === true && // Проверяем, что это действительно AxiosError
    !!(error as AxiosError<ResponseData>).response?.data // Убедимся, что response.data не undefined
  );
}
