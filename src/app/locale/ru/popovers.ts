export const getTextsHelpers = (
  userType: "sell" | "user",
  productType: "item" | "service"
) => {
  const isItem = productType === "item";
  const isSell = userType === "sell";

  const separationVar1 = isItem ? "товара" : "услуги";
  const separationVar2 = isItem ? "товар" : "услугу";
  const separationVar3 = isItem ? "товар" : "услуга";
  const separationVar4 = isItem ? "товар, который" : "услугу, которую";
  const separationVar5 = isItem ? "изготовлен товар" : "оказана услуга";
  const separationVar6 = isItem
    ? "должен быть изготовлен товар"
    : "должна быть оказана услуга";
  const separationVar7 = isItem ? "его" : "её";

  return {
    category: isSell
      ? `Выберите категорию для ${separationVar1}, чтобы помочь покупателю найти его.`
      : `Выберите категорию для ${separationVar1}.`,

    company: "Укажите название вашей компании или бренда.",
    customerInfo: `Укажите информацию, которую Вы хотите получить от покупателя при отклике на ${separationVar2}.`,

    type: isSell
      ? "Выберите тип: товар или услуга."
      : `Выберите, хотите ли вы купить товар или услугу.`,

    title: isSell
      ? `Введите название ${separationVar1}, которое будет видно покупателям.`
      : `Введите название ${separationVar1}, которое будет представлено продавцам.`,

    description: isSell
      ? `Опишите ${separationVar2}, чтобы покупатели понимали ${separationVar7} особенности.`
      : `Опишите ${separationVar4} Вы хотите получить.`,

    price: isSell
      ? `Укажите стоимость ${separationVar1}. Вы можете выбрать фиксированную цену или диапазон.`
      : `Укажите Ваш бюджет.`,

    delivery: isSell
      ? "Укажите, возможна ли доставка для товара."
      : "Укажите, должна ли быть доступна доставка для товара.",

    timeProduction: isSell
      ? `Укажите за сколько дней будет ${separationVar5}.`
      : `Укажите, за какое время ${separationVar6}.`,

    photo: isSell
      ? `Загрузите фотографии, которые наилучшим образом представляют ${separationVar2}.`
      : `Загрузите фотографии, которые показывают, как выглядит ${separationVar3}.`,
  };
};
