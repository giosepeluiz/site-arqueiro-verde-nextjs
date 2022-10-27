import { useState } from "react";

const goToURL = (e) => {
  if (e.target.value !== "default") {
    window.open(e.target.value, "_blank");
  }
};

export default function Playlist() {
  const [playlist] = useState([
    {
      title: "Alice Madness Returns",
      url: "https://serie.arqueirover.de/alicemr",
    },
    {
      title: "Assassin's Creed",
      url: "https://serie.arqueirover.de/ac",
    },
    {
      title: "Assassin's Creed 2",
      url: "https://serie.arqueirover.de/ac2",
    },
    {
      title: "Assassin's Creed Brotherhood",
      url: "https://serie.arqueirover.de/acbh",
    },
    {
      title: "Assassin's Creed Revelations",
      url: "https://serie.arqueirover.de/acrv",
    },
    {
      title: "Assassin's Creed 3",
      url: "https://serie.arqueirover.de/ac3",
    },
    {
      title: "Assassin's Creed 4",
      url: "https://serie.arqueirover.de/ac4",
    },
    {
      title: "Assassin's Creed Origins",
      url: "https://serie.arqueirover.de/acorigins",
    },
    {
      title: "Avatar de James Cameron",
      url: "https://serie.arqueirover.de/jcavatar",
    },
    {
      title: "Bioshock",
      url: "https://serie.arqueirover.de/bioshock",
    },
    {
      title: "Bioshock 2",
      url: "https://serie.arqueirover.de/bioshock2",
    },
    {
      title: "Bioshock Infinite",
      url: "https://serie.arqueirover.de/bioshockinf",
    },
    {
      title: "Bioshock Infinite - Burial at Sea",
      url: "https://serie.arqueirover.de/bioshockbas",
    },
    {
      title: "Call of Duty 2",
      url: "https://serie.arqueirover.de/cod2",
    },
    {
      title: "Contrast",
      url: "https://serie.arqueirover.de/contrast",
    },
    {
      title: "Controle Retro",
      url: "https://serie.arqueirover.de/controleretro",
    },
    {
      title: "Deus Ex",
      url: "https://serie.arqueirover.de/deusex",
    },
    {
      title: "Dying Light",
      url: "https://serie.arqueirover.de/dyinglight",
    },
    {
      title: "Dying Light The Following",
      url: "https://serie.arqueirover.de/dltf",
    },
    {
      title: "Evil Dead Regeneration",
      url: "https://serie.arqueirover.de/evildead",
    },
    {
      title: "Fallout 3",
      url: "https://serie.arqueirover.de/fallout3",
    },
    {
      title: "Fallout 4",
      url: "https://serie.arqueirover.de/fallout4",
    },
    {
      title: "Far Cry",
      url: "https://serie.arqueirover.de/fc",
    },
    {
      title: "Far Cry 2",
      url: "https://serie.arqueirover.de/fc2",
    },
    {
      title: "Far Cry 2 [Infamous]",
      url: "https://serie.arqueirover.de/fc2hard",
    },
    {
      title: "Far Cry 3",
      url: "https://serie.arqueirover.de/fc3",
    },
    {
      title: "Far Cry 2 [Hardcore]",
      url: "https://serie.arqueirover.de/fc3hard",
    },
    {
      title: "FC3 Blood Dragon",
      url: "https://serie.arqueirover.de/fcbd",
    },
    {
      title: "Far Cry 4",
      url: "https://serie.arqueirover.de/fc4",
    },
    {
      title: "Far Cry Primal",
      url: "https://serie.arqueirover.de/fcprimal",
    },
    {
      title: "Far Cry 5",
      url: "https://serie.arqueirover.de/fc5",
    },
    {
      title: "FC5 Defuntos Lunáticos Zumbis",
      url: "https://serie.arqueirover.de/fczumbis",
    },
    {
      title: "FC5 Horas de Escuridão",
      url: "https://serie.arqueirover.de/fcvietnam",
    },
    {
      title: "FC5 Perdido em Marte",
      url: "https://serie.arqueirover.de/fcmarte",
    },
    {
      title: "FC New Dawn",
      url: "https://serie.arqueirover.de/fcnd",
    },
    {
      title: "Grand Theft Auto III",
      url: "https://serie.arqueirover.de/gta3",
    },
    {
      title: "Grand Theft Auto VC",
      url: "https://serie.arqueirover.de/gtavc",
    },
    {
      title: "Grand Theft Auto SA",
      url: "https://serie.arqueirover.de/gtasa",
    },
    {
      title: "Halo Reach",
      url: "https://serie.arqueirover.de/haloreach",
    },
    {
      title: "LEGO Batman",
      url: "https://serie.arqueirover.de/legobatman",
    },
    {
      title: "LEGO Batman 3 Beyond Gotham",
      url: "https://serie.arqueirover.de/legobatman3",
    },
    {
      title: "Mafia",
      url: "https://serie.arqueirover.de/mafia",
    },
    {
      title: "Metro 2033",
      url: "https://serie.arqueirover.de/metro2033",
    },
    {
      title: "Metro Exodus",
      url: "https://serie.arqueirover.de/metroexodus",
    },
    {
      title: "Middle-Earth Shadow of War",
      url: "https://serie.arqueirover.de/mesow",
    },
    {
      title: "Minecraft 1.13",
      url: "http://bit.ly/FnCMine113",
    },
    {
      title: "Papo & Yo",
      url: "https://serie.arqueirover.de/papoyo",
    },
    {
      title: "Portal",
      url: "https://serie.arqueirover.de/portal",
    },
    {
      title: "Prince of Persia TSoT",
      url: "https://serie.arqueirover.de/poptsot",
    },
    {
      title: "Prince of Persia WW",
      url: "https://serie.arqueirover.de/popww",
    },
    {
      title: "Prince of Persia TTT",
      url: "https://serie.arqueirover.de/popttt",
    },
    {
      title: "ReCore",
      url: "https://serie.arqueirover.de/recore",
    },
    {
      title: "Red Dead Redemption",
      url: "https://serie.arqueirover.de/rdr",
    },
    {
      title: "Red Dead Redemption 2",
      url: "https://serie.arqueirover.de/rdr2",
    },
    {
      title: "Resident Evil 4 HD",
      url: "https://serie.arqueirover.de/re4",
    },
    {
      title: "Sniper Elite 4",
      url: "https://serie.arqueirover.de/sniperelite4",
    },
    {
      title: "Sonic Heroes",
      url: "https://serie.arqueirover.de/sonicheroes",
    },
    {
      title: "Spec Ops The Line",
      url: "https://serie.arqueirover.de/specopstl",
    },
    {
      title: "S.T.A.L.K.E.R. SoC",
      url: "https://serie.arqueirover.de/stalkersoc",
    },
    {
      title: "S.T.A.L.K.E.R. CS",
      url: "https://serie.arqueirover.de/stalkersky",
    },
    {
      title: "S.T.A.L.K.E.R. CoP",
      url: "https://serie.arqueirover.de/stalkercop",
    },
    {
      title: "State of Decay 2",
      url: "https://serie.arqueirover.de/sod2",
    },
    {
      title: "Styx Shards of Darkness",
      url: "https://serie.arqueirover.de/styxsod",
    },
    {
      title: "Sunset Overdrive",
      url: "https://serie.arqueirover.de/sunset",
    },
    {
      title: "Terminator Resistance",
      url: "https://serie.arqueirover.de/termresistance",
    },
    {
      title: "The Outer Worlds",
      url: "https://serie.arqueirover.de/tow",
    },
    {
      title: "The Walking Dead Survival Instinct",
      url: "https://serie.arqueirover.de/twdsi",
    },
    {
      title: "The Witcher 3",
      url: "https://serie.arqueirover.de/tw3",
    },
    {
      title: "Toy Story 3",
      url: "https://serie.arqueirover.de/toystory3",
    },
    {
      title: "Watch_Dogs 2",
      url: "https://serie.arqueirover.de/wd2",
    },
  ]);

  return (
    <select defaultValue="default" onChange={(e) => goToURL(e)}>
      <option value="default" disabled>
        Navegue até uma playlist
      </option>
      {playlist.map((e) => (
        <option key={e.title} value={e.url}>
          {e.title}
        </option>
      ))}
    </select>
  );
}
