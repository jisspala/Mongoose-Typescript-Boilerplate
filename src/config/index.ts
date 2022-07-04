
import dev from "./dev.json";
import qa from "./qa.json";
import prod from "./prod.json";
import { config } from "../types";

function objToEnv(env:config):void {
    let itemKey: keyof config;
    for ( itemKey in env) {
        process.env[itemKey] = env[itemKey];
    }
}


/**
 * #TODO
 * Move all secreats from file to vault
 */
export function configLoader() {
    console.log(process.env.NODE_ENV);
    switch (process.env.NODE_ENV) {
        case "prod":
            objToEnv(prod);
            break;
        case "qa":
            objToEnv(qa);
            break;
        case "dev":
            objToEnv(dev);
            break;
        default:
            objToEnv(dev);
    }
    objToEnv(dev);
}