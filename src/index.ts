import { app } from "./server/server"

const port = process.env.PORT || 3001

app.listen(port, () => console.log('Server running'))