const users = [
    { email: 'test@123.com', password: '123', name: 'Hwang' },
    { email: 'test@456.com', password: '456', name: 'Ru' },
    { email: 'test@789.com', password: '789', name: 'RaeRu' }
  ]
  
  export function signIn({ email, password }) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user === undefined) throw new Error();
    return user;
  }