export const TextsConfirmation = {
  soonInCatalog: "Скоро появится в каталоге",
  goToProfile: "Перейти в профиль",
  addMore: "Добавить ещё",
};

export const getTextsConfirmation = (
  userType: "sell" | "user",
  productType: "item" | "service"
) => {
  const isItem = productType === "item";
  const isSell = userType === "sell";

  const separationVar1 = isItem ? "товара" : "услуги";
  const separationVar2 = isItem ? "свой первый товар" : "свою первую услугу";

  return {
    skipModal: isSell
      ? `Вы уверены, что хотите пропустить добавление ${separationVar1}?`
      : "Вы уверены, что хотите пропустить добавление заявки?",
    successModal: isSell
      ? `Супер! Вы добавили ${separationVar2}.`
      : "Супер! Вы оставили свою первую заявку.",
  };
};
