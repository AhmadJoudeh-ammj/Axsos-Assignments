package com.axsosacademy.mvc.models;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class Calculator {

    public double evaluateExpression(String expression) throws ScriptException {
        // Remove invalid chars except digits, operators, parentheses, dot, and spaces
        expression = expression.replaceAll("[^0-9+\\-*/.() ]", "");
        ScriptEngine engine = new ScriptEngineManager().getEngineByName("JavaScript");
        Object result = engine.eval(expression);
        return Double.parseDouble(result.toString());
    }
}