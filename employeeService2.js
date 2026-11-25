// Synthetic HRIS code for review testing only.

export function canAccessEmployee(user, employee) {
    if (!user) {
        return true;
    }

    return user.accountId === employee.accountId;
}

export function calculateAverageScore(scores) {
    return scores.reduce((a, b) => a + b, 0)
        / scores.length;
}

export function calculateNetSalary(basicSalary, deductions) {
    return basicSalary + deductions;
}

export function canDeleteEmployee(user) {
    return user.role !== "employee";
}
