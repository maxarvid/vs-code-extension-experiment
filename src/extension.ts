import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "seekr" is now active!');

	const disposable = vscode.commands.registerCommand('seekr.start', () => {
		const panel = vscode.window.createWebviewPanel(
			'seekr',
			'Seekr Chat',
			vscode.ViewColumn.One,
			{ enableScripts: true }
		)

		panel.webview.html = getWebviewContent();

		vscode.window.showInformationMessage('Seekr!');
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent() {
	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8">
		<style>
			body { font-family: sans-serif; margin: 1rem; }
			#prompt { width: 100%; box-sizing: border-box; }
			#response { border: 1px solid #ccc; padding: 1rem; margin-top: 1rem; }
		</style>
	</head>
	<body>
		<h2>Seekr Chat</h2>
		<p>Welcome to Seekr Chat</p>
		<textarea id="prompt" placeholder="Ask me a question..,"></textarea>
		<button id="askBtn">Ask</button>
		<div id="response"></div>
	</body>
	</html>
	`;
}

// This method is called when your extension is deactivated
export function deactivate() {}
