
export class Member{
  id: number;
  username: string;
  email: string;
  password: string;
  address: string;
  phone: string;
  firstName: string;
  lastName: string;

  constructor(id: number, username: string, email: string, password: string, address: string, phone: string, firstName: string, lastName: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.address = address;
    this.phone = phone;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
