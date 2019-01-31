const greet = require('./greet');
 
// Requirement 1
test('Write a method greet(name)', () =>{
    expect(greet("Bob"));
});

test('when name is "Bob", the method should return a string "Hello, Bob."', () =>{
    expect(greet("Bob")).toBe("Hello, Bob.");
});

test('when name is "Kanun", the method should return a string "Hello, Kanun."', () =>{
    expect(greet("Kanun")).toBe("Hello, Kanun.");
});

// Requirement 2
test('when name is null, then the method should return the string "Hello, my friend."', () =>{
    expect(greet(null)).toBe("Hello, my friend.");
});

// Requirement 3
test('when name is "JERRY" then the method should return the string "HELLO JERRY!"', () =>{
    expect(greet("JERRY")).toBe("HELLO JERRY!");
});

// Requirement 4
test('when name is ["Jill", "Jane"], then the method should return the string "Hello, Jill and Jane."', () =>{
    expect(greet(["Jill", "Jane"])).toBe("Hello, Jill and Jane.");
});

// Requirement 5
test('when name is ["Amy", "Brian", "Charlotte"], then the method should return the string "Hello, Amy, Brian, and Charlotte."', () =>{
    expect(greet(["Amy", "Brian", "Charlotte"])).toBe("Hello, Amy, Brian, and Charlotte.");
});

test('when name is ["Amy", "Brian", "Charlotte", "Kanun"], then the method should return the string "Hello, Amy, Brian, Charlotte and Kanun."', () =>{
    expect(greet(["Amy", "Brian", "Charlotte","Kanun"])).toBe("Hello, Amy, Brian, Charlotte, and Kanun.");
});

// Requirement 6
test('when name is ["Amy", "BRIAN", "Charlotte"], then the method should return the string "Hello, Amy and Charlotte. AND HELLO BRIAN!"', () =>{
    expect(greet(["Amy", "BRIAN", "Charlotte"])).toBe("Hello, Amy and Charlotte. AND HELLO BRIAN!");
});




