package com.axsosacademy.mvc.models;

public class Calculator {
	private double operandOne;
    private double operandTwo;
    private String operation;
    private double result;

    public double getOperandOne() {
        return operandOne;
    }

    public void setOperandOne(double operandOne) {
        this.operandOne = operandOne;
    }

    public double getOperandTwo() {
        return operandTwo;
    }

    public void setOperandTwo(double operandTwo) {
        this.operandTwo = operandTwo;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public double getResult() {
        return result;
    }

    public void performOperation() {
        if ("+".equals(operation)) {
            result = operandOne + operandTwo;
        } else if ("-".equals(operation)) {
            result = operandOne - operandTwo;
        } else {
            throw new IllegalArgumentException("Unsupported operation: " + operation);
        }
    }
}

