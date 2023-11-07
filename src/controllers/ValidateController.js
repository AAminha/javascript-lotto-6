import Convert from '../utils/Convert';
import Validate from '../utils/Validate';

const ValidateController = {
  validatePurchaseLottoAmount(amountString) {
    const amount = Convert.convertToNumber(amountString);

    Validate.isNumber(amount);
    Validate.isPurchaseUnit(amount);

    return amount;
  },

  validateWinningNumbers(numbersString) {
    const numbers = Convert.convertToList(numbersString);

    numbers.map(number => Validate.isNumberInRange(number));
    Validate.isWinningNumbersLength(numbers);
    Validate.isDuplicateWinningNumbers(numbers);
    numbers.map(number => Validate.isNumberInRange(number));

    return numbers;
  },

  validateBonusNumber(winningNumbers, numberString) {
    const number = Convert.convertToNumber(numberString);

    Validate.isNumber(number);
    Validate.isNumberInRange(number);
    Validate.isDuplicateBonusNumber(winningNumbers, number);

    return number;
  },
};

export default ValidateController;
