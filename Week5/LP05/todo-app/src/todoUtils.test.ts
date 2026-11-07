import { createTodo, addTodo, countDone } from "./todoUtils";
import type { Todo } from "./todoUtils";

describe("createTodo statement coverage", () => {
  // One call runs every statement because createTodo has no branches.
  test("creates a todo with the given text", () => {
    const todo = createTodo("Buy milk");

    expect(todo.text).toBe("Buy milk");
    expect(todo.done).toBe(false);
    expect(typeof todo.id).toBe("number");
  });
});

describe("addTodo branch coverage", () => {
  // Whitespace becomes empty after trim(), so the if condition is true.
  test("returns the list unchanged when the text is blank", () => {
    const todos: Todo[] = [];
    const result = addTodo(todos, "   ");

    expect(result).toEqual([]);
  });

  // Nonblank text makes the if condition false, so a new todo is added.
  test("adds a new todo when the text is not blank", () => {
    const todos: Todo[] = [];
    const result = addTodo(todos, "Buy milk");

    expect(result).toHaveLength(1);
    expect(result[0].text).toBe("Buy milk");
    expect(result[0].done).toBe(false);
  });
});

describe("countDone loop coverage", () => {
  // An empty list skips the loop, so the count stays at zero.
  test("returns 0 when the list is empty", () => {
    const todos: Todo[] = [];
    const result = countDone(todos);

    expect(result).toBe(0);
  });

  // One finished todo runs the loop once and increases the count once.
  test("counts one finished todo", () => {
    const todos: Todo[] = [{ id: 1, text: "Buy milk", done: true }];
    const result = countDone(todos);

    expect(result).toBe(1);
  });

  // Several todos run the loop repeatedly and check both outcomes of the if.
  test("counts only the finished todos", () => {
    const todos: Todo[] = [
      { id: 1, text: "Buy milk", done: true },
      { id: 2, text: "Walk the dog", done: false },
      { id: 3, text: "Write tests", done: true },
    ];
    const result = countDone(todos);

    expect(result).toBe(2);
  });
});
