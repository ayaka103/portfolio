"""Calculator module with arithmetic and statistics operations."""

import math
from typing import Union

Number = Union[int, float]


class Calculator:
    """A calculator supporting arithmetic and basic statistics."""

    def __init__(self) -> None:
        self.history: list[tuple[str, Number]] = []

    def _record(self, operation: str, result: Number) -> Number:
        self.history.append((operation, result))
        return result

    # --- Arithmetic ---

    def add(self, a: Number, b: Number) -> Number:
        return self._record(f"{a} + {b}", a + b)

    def subtract(self, a: Number, b: Number) -> Number:
        return self._record(f"{a} - {b}", a - b)

    def multiply(self, a: Number, b: Number) -> Number:
        return self._record(f"{a} * {b}", a * b)

    def divide(self, a: Number, b: Number) -> float:
        if b == 0:
            raise ZeroDivisionError("Division by zero is not allowed")
        result = a / b
        self._record(f"{a} / {b}", result)
        return result

    def power(self, base: Number, exponent: Number) -> Number:
        result = base ** exponent
        return self._record(f"{base} ^ {exponent}", result)

    def modulo(self, a: Number, b: Number) -> Number:
        if b == 0:
            raise ZeroDivisionError("Modulo by zero is not allowed")
        return self._record(f"{a} % {b}", a % b)

    # --- Statistics ---

    def mean(self, values: list[Number]) -> float:
        if not values:
            raise ValueError("Cannot compute mean of empty list")
        result = sum(values) / len(values)
        self._record(f"mean({values})", result)
        return result

    def median(self, values: list[Number]) -> Number:
        if not values:
            raise ValueError("Cannot compute median of empty list")
        sorted_vals = sorted(values)
        n = len(sorted_vals)
        mid = n // 2
        if n % 2 == 0:
            result = (sorted_vals[mid - 1] + sorted_vals[mid]) / 2
        else:
            result = sorted_vals[mid]
        self._record(f"median({values})", result)
        return result

    def variance(self, values: list[Number]) -> float:
        if len(values) < 2:
            raise ValueError("Need at least 2 values for variance")
        avg = sum(values) / len(values)
        result = sum((x - avg) ** 2 for x in values) / (len(values) - 1)
        self._record(f"variance({values})", result)
        return result

    def stdev(self, values: list[Number]) -> float:
        result = math.sqrt(self.variance(values))
        # Remove the variance entry, replace with stdev
        self.history.pop()
        self._record(f"stdev({values})", result)
        return result

    def get_history(self) -> list[tuple[str, Number]]:
        return list(self.history)

    def clear_history(self) -> None:
        self.history.clear()


def main() -> None:
    calc = Calculator()

    print("=== Arithmetic ===")
    print(f"10 + 3 = {calc.add(10, 3)}")
    print(f"10 - 3 = {calc.subtract(10, 3)}")
    print(f"10 * 3 = {calc.multiply(10, 3)}")
    print(f"10 / 3 = {calc.divide(10, 3):.4f}")
    print(f"2 ^ 8  = {calc.power(2, 8)}")
    print(f"10 % 3 = {calc.modulo(10, 3)}")

    print("\n=== Statistics ===")
    data = [4, 8, 15, 16, 23, 42]
    print(f"Data: {data}")
    print(f"Mean:     {calc.mean(data):.4f}")
    print(f"Median:   {calc.median(data)}")
    print(f"Variance: {calc.variance(data):.4f}")
    print(f"Stdev:    {calc.stdev(data):.4f}")

    print(f"\n=== History ({len(calc.get_history())} operations) ===")
    for op, result in calc.get_history():
        print(f"  {op} = {result}")


if __name__ == "__main__":
    main()
