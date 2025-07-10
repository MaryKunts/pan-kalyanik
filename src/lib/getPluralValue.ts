export const getPluralValue = (count: number, rules: string[]) => {
  const result = new Intl.PluralRules("ru-Ru").select(count);

  switch (result) {
    case "one":
      return `${count} ${rules[0]}`;
    case "few":
      return `${count} ${rules[1]}`;
    case "many":
      return `${count} ${rules[2]}`;
  }

  return "";
};
