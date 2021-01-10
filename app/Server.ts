import { Express, Request, Response } from "express";

export class Server {
	private app: Express;

	constructor(app: Express) {
		this.app = app;
		this.app.get("/api", (req:Request, res: Response) => {
			res.send("Contacted API");
		});
	}

	public start(port: number) {
		this.app.listen(port, () => console.log(`Server listening on port ${port}`));
	}
}