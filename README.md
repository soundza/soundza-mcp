<p align="center">
  <img src="assets/logo-wordmark.png" alt="Soundza" width="280">
</p>

# Soundza MCP server

Free sound effects, music and ambience for your AI assistant or your code. Ask for "a coin pickup and a jump sound for my platformer" and it finds them on [Soundza](https://soundza.com/developers?utm_source=github&utm_medium=readme), downloads the files and wires them in.

Thousands of sounds · 35 metadata fields per sound · free for commercial use

## Connect

**Claude** (web, desktop, phone): [Add to Claude](https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Soundza&connectorUrl=https%3A%2F%2Fmcp.soundza.com%2Fmcp%2Foauth), then sign in to Soundza. Or add a custom connector with:

```
https://mcp.soundza.com/mcp/oauth
```

**ChatGPT**: Plugins → add a custom MCP server with the same URL and keep OAuth. Some plans need Developer mode turned on.

**Claude Code**:

```sh
claude mcp add --transport http soundza https://mcp.soundza.com/mcp/oauth
```

Then run `/mcp`, choose soundza and sign in in the browser.

**Codex, Cursor, VS Code and other agents**: use `https://mcp.soundza.com/mcp/oauth` if the client supports sign-in. Otherwise use `https://mcp.soundza.com/mcp` with the header `Authorization: Bearer <key>`; get a free key at [soundza.com/developers/keys](https://soundza.com/developers/keys?utm_source=github&utm_medium=readme).

## Tools

| Tool | What it does |
| --- | --- |
| `search_sounds` | Search by words and filters: type, length, tempo, key, mood, what it's good for |
| `get_sound` | One sound's full metadata |
| `search_packs` / `get_pack` | Themed packs and their sounds |
| `download_sound` | A link to the full-quality file, a ready `curl` command and the sound's page |

## REST API

The same library over HTTP, with a free API key: `https://api.soundza.com/v1`. [Docs](https://soundza.com/developers?utm_source=github&utm_medium=readme) · [OpenAPI](https://soundza.com/openapi.json) · [llms.txt](https://soundza.com/llms.txt)

## Examples

[Godot](examples/godot) · [Phaser](examples/phaser) · [Python](examples/python)

## License and credit

Sounds are free to use in personal and commercial work under the [Soundza Standard License](https://soundza.com/license). We'd love a link back to soundza.com when you share what you make: [how to credit](https://soundza.com/developers#credit). The example code in this repo is MIT licensed.

Questions: admin@soundza.com
