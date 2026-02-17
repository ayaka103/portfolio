"""Tests for the Calculator class."""

import math
import unittest

from calculator import Calculator


class TestArithmetic(unittest.TestCase):
    def setUp(self) -> None:
        self.calc = Calculator()

    def test_add(self) -> None:
        self.assertEqual(self.calc.add(2, 3), 5)
        self.assertEqual(self.calc.add(-1, 1), 0)
        self.assertAlmostEqual(self.calc.add(0.1, 0.2), 0.3, places=10)

    def test_subtract(self) -> None:
        self.assertEqual(self.calc.subtract(10, 3), 7)
        self.assertEqual(self.calc.subtract(0, 5), -5)

    def test_multiply(self) -> None:
        self.assertEqual(self.calc.multiply(4, 5), 20)
        self.assertEqual(self.calc.multiply(-3, 7), -21)
        self.assertEqual(self.calc.multiply(0, 100), 0)

    def test_divide(self) -> None:
        self.assertEqual(self.calc.divide(10, 2), 5.0)
        self.assertAlmostEqual(self.calc.divide(1, 3), 0.3333333, places=5)

    def test_divide_by_zero(self) -> None:
        with self.assertRaises(ZeroDivisionError):
            self.calc.divide(1, 0)

    def test_power(self) -> None:
        self.assertEqual(self.calc.power(2, 8), 256)
        self.assertEqual(self.calc.power(5, 0), 1)
        self.assertEqual(self.calc.power(3, 3), 27)

    def test_modulo(self) -> None:
        self.assertEqual(self.calc.modulo(10, 3), 1)
        self.assertEqual(self.calc.modulo(15, 5), 0)

    def test_modulo_by_zero(self) -> None:
        with self.assertRaises(ZeroDivisionError):
            self.calc.modulo(10, 0)


class TestStatistics(unittest.TestCase):
    def setUp(self) -> None:
        self.calc = Calculator()

    def test_mean(self) -> None:
        self.assertEqual(self.calc.mean([1, 2, 3, 4, 5]), 3.0)
        self.assertEqual(self.calc.mean([10]), 10.0)

    def test_mean_empty(self) -> None:
        with self.assertRaises(ValueError):
            self.calc.mean([])

    def test_median_odd(self) -> None:
        self.assertEqual(self.calc.median([1, 3, 5]), 3)
        self.assertEqual(self.calc.median([5, 1, 3]), 3)

    def test_median_even(self) -> None:
        self.assertEqual(self.calc.median([1, 2, 3, 4]), 2.5)

    def test_median_empty(self) -> None:
        with self.assertRaises(ValueError):
            self.calc.median([])

    def test_variance(self) -> None:
        result = self.calc.variance([2, 4, 4, 4, 5, 5, 7, 9])
        self.assertAlmostEqual(result, 4.571429, places=4)

    def test_variance_too_few(self) -> None:
        with self.assertRaises(ValueError):
            self.calc.variance([1])

    def test_stdev(self) -> None:
        result = self.calc.stdev([2, 4, 4, 4, 5, 5, 7, 9])
        expected = math.sqrt(4.571428571428571)
        self.assertAlmostEqual(result, expected, places=6)


class TestHistory(unittest.TestCase):
    def setUp(self) -> None:
        self.calc = Calculator()

    def test_history_records_operations(self) -> None:
        self.calc.add(1, 2)
        self.calc.multiply(3, 4)
        history = self.calc.get_history()
        self.assertEqual(len(history), 2)
        self.assertEqual(history[0], ("1 + 2", 3))
        self.assertEqual(history[1], ("3 * 4", 12))

    def test_clear_history(self) -> None:
        self.calc.add(1, 1)
        self.calc.clear_history()
        self.assertEqual(len(self.calc.get_history()), 0)

    def test_history_returns_copy(self) -> None:
        self.calc.add(1, 1)
        history = self.calc.get_history()
        history.clear()
        self.assertEqual(len(self.calc.get_history()), 1)


if __name__ == "__main__":
    unittest.main()
