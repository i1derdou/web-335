# Author: David Clemens
# Date: 2024-09-01
# File Name: Clemens_lemonadeStand.py
# Description: This program calculates the cost of making lemonade and the profit from selling it.

# Function to calculate the total cost of making lemonade
def calculate_cost(lemons_cost, sugar_cost):
    # Combine the cost of lemons and sugar to get the total cost
    # :param lemons_cost: The cost of lemons.
    # :param sugar_cost: The cost of sugar.
    # :return: Total cost of making lemonade.
    total_cost = lemons_cost + sugar_cost
    return total_cost

# Function to calculate the profit from selling lemonade
def calculate_profit(lemons_cost, sugar_cost, selling_price):
    # First, calculate the total cost by calling calculate_cost function
    total_cost = calculate_cost(lemons_cost, sugar_cost)

    # Subtract the total cost from the selling price to determine profit
    # :param lemons_cost: The cost of lemons.
    # :param sugar_cost: The cost of sugar.
    # :param selling_price: The selling price of the lemonade.
    # :return: Profit from selling lemonade.
    profit = selling_price - total_cost

    return profit

# Define variables for the costs of lemons and sugar, and the selling price of lemonade
lemons_cost = 5.00       # The cost to buy lemons
sugar_cost = 2.50        # The cost to buy sugar
selling_price = 10.00    # The price at which lemonade is sold

# Build the output strings for the results using string formatting
cost_result = f"${lemons_cost} + ${sugar_cost} = ${calculate_cost(lemons_cost, sugar_cost)}"
profit_result = f"Profit: ${calculate_profit(lemons_cost, sugar_cost, selling_price)}"

# Print the header for the output
print("Lemonade Stand Cost and Profit Calculation")
print("----------------------------------------")

# Print the cost calculation result to the console
print(cost_result)

# Print the profit calculation result to the console
print(profit_result)