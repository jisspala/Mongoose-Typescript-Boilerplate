export interface config{
    "MONGO_HOST": string,
    "MONGO_PORT":string,
    "MONGO_USER":string,
    "MONGO_PWD":string,
    "MONGO_DB":string
}

//custom user type
export interface cuser {
    name: string;
    email: string;
  }