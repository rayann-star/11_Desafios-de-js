let jogos = [ "Minecraft", "The Sims", "Roblox", "Terraria", "Stardew Valley" ];

let jogoProcurado = "Minecraft";

if (jogos.includes(jogoProcurado)) {
    console.log(` Encontrado! "{jogoProcurado}" está na lista.`);
} else {
    console.log( "{jogoProcurado}não foi encontrado." );
}