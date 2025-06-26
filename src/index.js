import { initMongoDB } from "./db/initMongoConnection.js";
import { setupServer } from "./server.js";

const appStart = async () => {
    // await createDirIfNotExists(TEMP_UPLOAD_DIR);
    // await createDirIfNotExists(UPLOAD_DIR);
    await initMongoDB();
    setupServer();

};

appStart();
