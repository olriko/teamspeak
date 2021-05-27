import { Container, getContainer } from "@cloudflare/containers";
import type { StopParams } from "@cloudflare/containers";

export class TeamSpeakContainer extends Container {
	defaultPort = 10080;
	sleepAfter = "24h";

	envVars = {
		TS3SERVER_LICENSE: "accept",
		TS3SERVER_QUERY_PROTOCOLS: "raw,http",
	};

	override onStart(): void {
		console.log("TeamSpeak container started");
	}

	override onStop(params: StopParams): void {
		console.log("TeamSpeak container stopped", params);
	}

	override onError(error: unknown): void {
		console.error("TeamSpeak container error:", error);
	}
}

interface Env {
	TEAMSPEAK_CONTAINER: DurableObjectNamespace<TeamSpeakContainer>;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const container = getContainer(env.TEAMSPEAK_CONTAINER);
		const url = new URL(request.url);

		if (url.pathname === "/") {
			const state = await container.getState();
			return Response.json({
				status: state,
				service: "teamspeak",
				port: 10080,
			});
		}

		return container.fetch(request);
	},
};
