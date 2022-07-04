import { configLoader } from "./config";
import { Logger } from "./helper/logger";
import { connect } from 'mongoose';
import { addUser,getUsers } from "./controllers/user";
configLoader();
const logObj = new Logger();
logObj.log('Starting App');

/**
 * Starting the operation 
 */

async function run() {
  // creating mongo connection 
  try {
    await connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@${process.env.MONGO_HOST}/test`);
    console.log("connectd")
  } catch (error) {
    console.log(`error:${error}`);
    process.exit(1) //if no mysql why we are runing 
  }

  //testing some mongo ops
  await addUser();
  await getUsers();

}

run().then(() => {
  logObj.log("done");
  process.exit(0);// exiting beause of mysql pool
});
