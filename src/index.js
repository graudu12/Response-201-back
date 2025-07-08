import { initMongoDB } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";
import { createDirIfNotExists } from "./utils/createDirIfNotExists.js";
import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from "./constants/index.js";

const appStart = async () => {
    await createDirIfNotExists(TEMP_UPLOAD_DIR);
    await createDirIfNotExists(UPLOAD_DIR);
    await initMongoDB();
    setupServer();
};

appStart();
