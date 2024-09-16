# Clemens_lemonadeStandSchedule.py
# Author: David Clemens
# Date: 2024-09-15
# Description: This program manages a weekly schedule for a lemonade stand. It lists tasks and schedules them over a week.

# List of tasks related to running a lemonade stand
tasks = [
    "Buy lemons and sugar",
    "Prepare lemonade",
    "Set up the stand",
    "Serve customers",
    "Clean the stand"
]

# List of days in the week
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

# Display the tasks
print("Lemonade Stand Tasks:")
for task in tasks:
    print(f"- {task}")

print("\nWeekly Schedule:")
# Assign tasks to the days of the week
for i, day in enumerate(days):
    if day == "Saturday" or day == "Sunday":
        print(f"{day}: Day off! Time to rest.")
    else:
        print(f"{day}: Task for the day - {tasks[i % len(tasks)]}")
