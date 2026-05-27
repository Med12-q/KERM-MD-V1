// command.js — KGTECH amélioré (sans crash, compatible 100%)
var commands = [];

function cmd(info, func) {
    // Protection si un boloss appelle cmd() sans argument
    if (!info) info = {};
    var data = info;
    data.function = func;
    if (!data.dontAddCommandList) data.dontAddCommandList = false;
    if (!data.desc) data.desc = '';
    if (!data.fromMe) data.fromMe = false;
    if (!data.category) data.category = 'misc';
    if (!data.filename) data.filename = "Not Provided";
    commands.push(data);
    return data;
}

// Optionnel : cherche une commande par son nom ou alias (utilisable dans ton handler)
function getCommand(name) {
    return commands.find(cmd => cmd.name === name || (cmd.alias && cmd.alias.includes(name)));
}

module.exports = {
    cmd,
    AddCommand: cmd,
    Function: cmd,
    Module: cmd,
    commands,
    getCommand
};