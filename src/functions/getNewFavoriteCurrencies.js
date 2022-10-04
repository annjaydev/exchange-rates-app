export const getNewFavoriteCurrencies = (oldFavorites, currencyCode) => {
  const isFavoriteCurrency = oldFavorites.includes(currencyCode)

  return isFavoriteCurrency
    ? oldFavorites.filter((favoriteItem) => favoriteItem !== currencyCode)
    : oldFavorites.concat(currencyCode)
}
