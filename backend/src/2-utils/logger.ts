import fs from "fs"
import path from "path";

const errorLogFile = path.resolve(__dirname, "../errors.log")
const activitiesLogFile = path.resolve(__dirname, "../activities.log")

function logError(message: string, err?: any): void {
    const now = new Date()
    let msgToLog = now.toDateString() + "\n";
    msgToLog += message + "\n"
    if (typeof err === "string") msgToLog += err + "\n"
    if (err?.stack) msgToLog += `stack: ${err.stack}\n`
    msgToLog += "-------------------------------------------------------------------\n"
    fs.appendFile(errorLogFile, msgToLog, () => { });
}

function logActivity(message: string): void {
    const now = new Date()
    let msgToLog = now.toLocaleString() + `\n`;
    msgToLog += message + `\n`;
    msgToLog += "------------------------------\n"
    fs.appendFile(activitiesLogFile, msgToLog, () => { })
}

export default {
    logError,
    logActivity
}