import type { OtherButton } from '@typings/utils.type';

const buttons = [
  {
    name: '88x31',
    link: 'https://cyber.dabamos.de/88x31/index.html',
    image: '88x31.gif',
  },
  {
    name: 'All Cops Are Bastards',
    image: 'acab.gif',
  },
  {
    name: 'Anarchy NOW!',
    image: 'anarchy.gif',
  },
  {
    name: 'Anime is gay as hell, but I approve!',
    image: 'animegay.gif',
  },
  {
    name: 'Antifa',
    image: 'antifa.gif',
  },
  {
    name: 'Antinazi - No Nazi, No Fascism, No Racism',
    image: 'antinazi.gif',
  },
  {
    name: 'Anything but Chrome',
    image: 'anythingbut.gif',
  },
  {
    name: 'AOL sucks, get a real ISP',
    image: 'aolsucks.gif',
  },
  {
    name: 'Arch Linux',
    link: 'https://archlinux.org/',
    image: 'archlinux.gif',
  },
  {
    name: 'Asexuals NOW!',
    image: 'asexualsnow.gif',
  },
  {
    name: 'Autism NOW!',
    image: 'autismnow.gif',
  },
  {
    name: 'Best viewed with any browser [Anarchy logo in Netscape Navigator style]',
    image: 'bestviewed.gif',
  },
  {
    name: 'Bitwarden',
    link: 'https://bitwarden.com',
    image: 'bitwarden.gif',
  },
  {
    name: 'Bunny Browser',
    image: 'bunnybrowser.gif',
  },
  {
    name: 'Canadians NOW!',
    image: 'canadiansnow.gif',
  },
  {
    name: "Car Seat Headrest's Twin Fantasy album - MUSIC FOR THE GAYS!!",
    link: 'https://carseatheadrest.bandcamp.com/album/twin-fantasy',
    image: 'carseatheadrest.gif',
  },
  {
    name: 'Click here to CRUSH CAPITALISM',
    link: "javascript:alert(':D');",
    image: 'clickheretocrushcapitalism.gif',
  },
  {
    name: 'Coded with Pride',
    link: 'https://pride.codes',
    image: 'codedwithpride.gif',
  },
  {
    name: 'Debian Powered',
    link: 'https://www.debian.org/',
    image: 'debian.gif',
  },
  {
    name: 'DRM - Defective by Design. Elimate DRM NOW!',
    link: 'https://www.defectivebydesign.org/',
    image: 'drm.gif',
  },
  {
    name: 'elixi.re',
    link: 'https://elixi.re/',
    image: 'elixire.gif',
  },
  {
    name: 'FFmpeg',
    link: 'https://ffmpeg.org/',
    image: 'ffmpeg.gif',
  },
  {
    name: 'Firefox',
    link: 'https://www.mozilla.org/en-US/firefox/new',
    image: 'firefox.gif',
  },
  {
    name: 'Foxwells Garden',
    link: 'https://foxwells.garden/',
    image: 'foxwells.gif',
  },
  {
    name: 'Free Tech Tips - CLICK HERE',
    link: 'https://linustechtips.com',
    image: 'freetechtips.gif',
  },
  {
    name: 'Get Quake NOW!',
    link: 'https://www.quake.com/',
    image: 'getquakenow.gif',
  },
  {
    name: 'Girls NOW!',
    image: 'girlsnow.png',
  },
  {
    name: 'Gitea',
    link: 'https://gitea.io/',
    image: 'gitea.gif',
  },
  {
    name: 'Go bare-pawed NOW!',
    image: 'gobarepawed.gif',
  },
  {
    name: 'Google Chrome IS EVIL!',
    image: 'googlechromeisevil.gif',
  },
  {
    name: 'GrapheneOS',
    link: 'https://grapheneos.org/',
    image: 'grapheneos.gif',
  },
  {
    name: 'Half-Life',
    link: 'https://www.half-life.com/',
    image: 'half-life.gif',
  },

  {
    name: 'I like computer',
    image: 'ilikecomputer.png',
  },
  {
    name: 'Internet Explorer IS EVIL!',
    image: 'ieisevil.gif',
  },
  {
    name: '100 gecs - I only listen to 100 gecs',
    link: 'https://www.100gecs.com/',
    image: 'ionly100gecs.gif',
  },
  {
    name: 'Implement RSS NOW!',
    link: 'https://rss.com/blog/how-do-rss-feeds-work/',
    image: 'implementrss.png',
  },
  {
    name: 'Internet Archive',
    link: 'https://archive.org/',
    image: 'internetarchive.gif',
  },
  {
    name: 'ISO 8601',
    link: 'https://xkcd.com/1179/',
    image: 'iso8601.png',
  },
  {
    name: 'I support Right to Repair',
    link: 'https://en.wikipedia.org/wiki/Right_to_repair',
    image: 'isupportrtr.png',
  },
  {
    name: "It's okay to give your bros some love",
    image: 'itsokay.gif',
  },
  {
    name: 'I wear cute socks!',
    image: 'iwearcutesocks.gif',
  },
  {
    name: 'Jellyfin',
    link: 'https://jellyfin.org',
    image: 'jellyfin.gif',
  },
  {
    name: 'Join the Fediverse',
    link: 'https://www.fediverse.to/',
    image: 'jointhefediverse.gif',
  },
  {
    name: 'LaTeX',
    link: 'https://www.latex-project.org',
    image: 'latex.gif',
  },
  {
    name: 'Libreboot',
    link: 'https://libreboot.org/',
    image: 'libreboot.gif',
  },
  {
    name: 'Made with my own two paws',
    image: 'madewithtwopaws.gif',
  },
  {
    name: 'Made with pride [lesbian pride flag]',
    image: 'mw_lesbian.gif',
  },
  {
    name: 'Made with pride [non-binary pride flag]',
    image: 'mw_nb.gif',
  },
  {
    name: 'Made with pride [pride flag]',
    image: 'mw_queer.gif',
  },
  {
    name: 'Made with pride [trans flag]',
    image: 'mw_trans.gif',
  },
  {
    name: 'Mafumafu',
    link: 'https://www.youtube.com/c/uni_mafumafu',
    image: 'mafumafu.gif',
  },
  {
    name: 'Made with Neovim',
    link: 'https://neovim.io/',
    image: 'neovim.gif',
  },
  {
    name: 'Mastodon',
    link: 'https://joinmastodon.org',
    image: 'mastodon.gif',
  },
  {
    name: 'Neocities',
    link: 'https://neocities.org/',
    image: 'neocities.gif',
  },
  {
    name: 'No WEBP! Just use PNG',
    image: 'nowebp.gif',
  },
  {
    name: "Non-binary because I'm not a robot",
    image: 'nonbinary2.png',
  },
  {
    name: 'Non-binary pride!',
    image: 'nonbinary.gif',
  },
  {
    name: 'Plastic Love NOW!',
    link: 'https://www.youtube.com/watch?v=T_lC2O1oIew',
    image: 'plasticlove.gif',
  },
  {
    name: 'Powered by AMD',
    link: 'https://www.amd.com/',
    image: 'pb_amd.gif',
  },
  {
    name: 'Powered by Fedora',
    link: 'https://fedoraproject.org/',
    image: 'pb_fedora.gif',
  },
  {
    name: 'Powered by FreeBSD',
    link: 'https://www.freebsd.org/',
    image: 'pb_freebsd.gif',
  },
  {
    name: 'Powered by SDF',
    link: 'https://sdf.org/',
    image: 'pb_sdf.gif',
  },
  {
    name: 'Privacy NOW!',
    image: 'privacynow.gif',
  },
  {
    name: 'Programming socks NOW!',
    image: 'programmingsocks.png',
  },
  {
    name: 'Queer Anime Database',
    link: 'https://queeranime.neocities.org/',
    image: 'queeranime.png',
  },
  {
    name: 'Queer coded webring',
    link: 'https://isaacfish.neocities.org/webring/',
    image: 'queercoded.png',
  },
  {
    name: 'Queer pride!',
    image: 'queerpride.gif',
  },
  {
    name: 'Sharing is caring... seed your torrents!',
    image: 'sharingiscaring.gif',
  },
  {
    name: 'Soulseek',
    link: 'https://www.slsknet.org/',
    image: 'soulseek.gif',
  },
  {
    name: 'Sun Microsystems',
    link: 'https://en.wikipedia.org/wiki/Sun_Microsystems',
    image: 'sun.gif',
  },
  {
    name: 'System Shock 2',
    link: 'https://store.steampowered.com/app/238210/System_Shock_2/',
    image: 'systemshock2.gif',
  },
  {
    name: 'This site is Miku APPROVED',
    image: 'miku.gif',
  },
  {
    name: 'This website is GAY',
    image: 'thiswebsiteisgay.gif',
  },
  {
    name: 'Tranarchy',
    image: 'tranarchy.gif',
  },
  {
    name: 'Trans rights NOW!',
    link: "javascript:alert('🏳️‍⚧️');",
    image: 'transnow.gif',
  },
  {
    name: 'Trans your gender',
    link: 'https://diyhrt.wiki/',
    image: 'transyourgender.gif',
  },
  {
    name: 'uBlock Origin NOW!',
    link: 'https://ublockorigin.com/',
    image: 'ublocknow.png',
  },
  {
    name: 'Vocaloid NOW!',
    link: 'https://www.vocaloid.com/en',
    image: 'vocaloid.png',
  },
  {
    name: 'voidtools',
    link: 'https://voidtools.com/',
    image: 'voidtools.png',
  },
  {
    name: 'wiby.me search',
    link: 'https://wiby.me/',
    image: 'wiby.gif',
  },
  {
    name: 'Yesterweb - Reclaim the Net',
    link: 'https://yesterweb.org/',
    image: 'yesterweb.png',
  },
] satisfies OtherButton[];

export default buttons;
