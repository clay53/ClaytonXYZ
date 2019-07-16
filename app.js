const express = require('express'),
    path = require("path");
    fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;

var db = {
    games: {
        "arc-2": {
            title: "Arc 2",
            desc: `Endless Arcade Game. You need to press A+D (at the same exact time) for the game to actually start. The goal of the game is to get the highest score. To gain score, collect purple squares or clear a stage by hitting a pink square. You have two minutes to get as many points and stage clears as possible. To submit your score (only if using the CDT branch - currently), type your name in the box below the main player and hit "Submit High Score".`,
            platforms: {
                web: {
                    versions: {
                        "v1.0.2-CDT": 1,
                        "v1.0.2": 0
                    }
                }
            },
            lastUpdated: 1563202271
        },
        "arc-plat": {
            title: "Arc Plat",
            desc: "Endless Platformer Game",
            platforms: {
                web: {
                    versions: {
                        "v1.1.2": {
                            index: 1
                        },
                        "v1.1.1": {
                            index: 0
                        }
                    }
                }
            },
            lastUpdated: 1563202271
        },
        "carai": {
            title: "CarAI",
            desc: "An AI made from scratch. Video showing the making and an explaination for how it works is here: https://youtu.be/jjhNab0bJgQ",
            platforms: {
                web: {
                    versions: {
                        "v1.0.0": {
                            index: 0
                        }
                    }
                },
                windows: {
                    versions: {
                        "v1.0.0": {
                            index: 0,
                            fileName: "CarAI-v1.0.0-Windows.zip"
                        }
                    }
                },
                mac: {
                    versions: {
                        "v1.0.0": {
                            index: 0,
                            fileName: "CarAI-v1.0.0-MacOS.zip"
                        }
                    }
                },
                linux: {
                    versions: {
                        "v1.0.0": {
                            index: 0,
                            fileName: "CarAI-v1.0.0-Linux.zip"
                        }
                    }
                }
            },
            lastUpdated: 1563202271
        },
        "demonic-conquest": {
            title: "Demonic Conquest",
            desc: "The aim of this game is to gather the entire story of Dean Winchester. For that, you need to survive as much as you can. Of course, you'll need to feast on some souls. But nobody is giving their souls so easily - you must hide and sneak attack the people. Don't forget that you made a deal with a crossroad demon and the time has come to pay the price - that is, your own soul. The hellhounds especially didn't forget about the deal and they are itching to taste some bone. - created for Firetruck Game Jam",
            platforms: {
                web: {
                    versions: {
                        "v0.1": {
                            index: 0
                        }
                    }
                },
                windows: {
                    versions: {
                        "v0.1": {
                            fileName: "DemonicConquest0.1PC.zip",
                            index: 0
                        }
                    }
                },
                mac: {
                    versions: {
                        "v0.1": {
                            fileName: "DemonicConquest0.1Mac.zip",
                            index: 0
                        }
                    }
                },
                linux: {
                    versions: {
                        "v0.1": {
                            fileName: "DemonicConquest0.1Linux.zip",
                            index: 0
                        }
                    }
                }
            },
            lastUpdated: 1563202271
        },
        "dig-it": {
            title: "Dig It",
            desc: "!.... !:,. !:,. !:.. !:, :::::,... ::::,.. ::::,.. :::::::::,.... !,... :::::::::,.. !::. !:,. !:. !: ! !:. !. !:, !:,. !.... !, !: !... !:, ::::,. !:: !::. !::.. - !, !:, - !:,. !.... !. - :::::::::,... !. !:, !:,. - !:,.... !. :::::::::,... !:, !, !:,. !. - !:,. !:. - !. !:,... !. !:.... - !. !:: !, !:, !:,. ::::,.",
            platforms: {
                windows: {
                    versions: {
                        "v1.2.2": {
                            index: 0,
                            fileName: "DigIt1.2.2PC.zip"
                        }
                    }
                }
            },
            lastUpdated: 1563202271
        },
        "russian-roulette": {
            title: "Russian Roulette",
            desc: "Russian Roulette Controls: 1-6 to load the chambers and space to spin/fire",
            platforms: {
                web: {
                    versions: {
                        "v1.1.0": {
                            index: 0
                        }
                    }
                }
            }
        },
        "tetris": {
            title: "Tetris",
            desc: "It's tetris.",
            platforms: {
                web: {
                    versions: {
                        "v1.0.0": {
                            index: 0
                        }
                    }
                }
            },
            lastUpdated: 1563202271
        },
        "the-giver-the-game": {
            title: "The Giver - The Game",
            desc: `WASD to move. Press Left Shift to hide from the plane. To win, get to the end of the dirt path. Clayton Does Thing or claytondoesthings.xyz is in no way affiliated with "The Giver" or any other person(s) that were involved with the creation of "The Giver" in any way.`,
            platforms: {
                web: {
                    versions: {
                        "v1.0": {
                            index: 0
                        }
                    }
                },
                linux64: {
                    versions: {
                        "v1.0": {
                            index: 0,
                            fileName: "TheGiverTheGame-1.0-Linux64.zip"
                        }
                    }
                },
                windows32: {
                    versions: {
                        "v1.0": {
                            index: 0,
                            fileName: "TheGiverTheGame-1.0-Windows32.zip"
                        }
                    }
                },
                windows64: {
                    versions: {
                        "v1.0": {
                            index: 0,
                            fileName: "TheGiverTheGame-1.0-Windows64.zip"
                        }
                    }
                }
            },
            lastUpdated: 1563202271
        }
    },
    software: {
        "calculator-the-game-cheats": {
            title: "Calculator: The Game - Cheats",
            lastUpdated: 1563202271
        },
        "comcode-translator": {
            title: "ComCode Translator",
            lastUpdated: 1563202271
        },
        "legitimate-images-made-from-images": {
            title: "Legitimate Images Made From Images",
            lastUpdated: 1563202271
        },
        "symbol-translator": {
            title: "Symbol Translator",
            lastUpdated: 1563202271
        },
        "tessellation-creator": {
            title: "Tessellation Creator",
            lastUpdated: 1563202271
        },
        "word-search-cheats": {
            title: "Word Search Cheats",
            lastUpdated: 1563202271
        },
        "word-search-cheats-ocr": {
            title: "Word Search Cheats OCR",
            lastUpdated: 1563202271
        }
    }
}

var modules = {
    favicon: function () {
        return `
            <link rel="icon" href="/s/favicon.ico">
        `;
    },
    topNav: function () {
        return `
            <ul>
                <li><a href="/w/home">Home</a></li>
                <li><a href="/w/games">Games</a></li>
                <li><a href="/w/software">Tools & Software</a></li>
            </ul>
        `;
    }
}

function htmlPage(head, body, title="Clayton Does Things XYZ", meta) {
    var metaS = `
        <Meta charset="UTF-8">
        <Meta name="viewport" content="width=device-width, initial-scale=1.0">
    `;
    for (let i in meta) {
        let metaT = "<Meta ";
        for (let j in meta[i]) {
            metaT += `${j}="${meta[i][j]}"`;
        }
        metaS += metaT+">";
    }
    var toSend = `<html><head><title>${title}</title>${metaS}${head}</head><body>${body}</body></html>`
    return toSend;
}

app.get("/s/*", (req, res) => {
    let p = `${__dirname}${req.url.replace("%20", ' ')}`;
    if (fs.existsSync(p)) {
        res.sendFile(p);
    } else {
        console.log(`File ${p} does not exist`);
        res.redirect("/404");
    }
});

app.get("/404", (req, res) => {
    res.sendFile("w/404.html", {root: __dirname});
});

app.get(["/", "/w", "/w/home"], (req, res) => {
    res.send(htmlPage(
        modules.favicon(),
        modules.topNav() +
        `
            <h1>Home</h1>
            <body>Welcome to the homepage of Clayton Does Things!</body>
        `,
        "Home | Clayton Does Things XYZ"
    ));
});

app.get(["/w/games", "/w/software"], (req, res) => {
    var type = req.url.split("/")[2].toLowerCase();
    var typeStylized = type.charAt(0).toUpperCase() + type.slice(1);
    res.send(htmlPage(
        modules.favicon(),
        modules.topNav() +
        `
            <h1>${typeStylized}</h1>
            <ul>
                ${(function () {
                    var r = "";
                    for (let i in db[type]) {
                        r += `<li><a href="/w/${type}/${i}">${db[type][i].title}</a></li>`
                    }
                    return r;
                })()}
            </ul>
        `,
        `${typeStylized} | Clayton Does Things XYZ`
    ));
});

app.get(["/w/games/:id", "/w/software/:id"], (req, res) => {
    var type = req.url.split("/")[2].toLowerCase();
    var item = db[type][req.params.id];
    if (item !== undefined) {
        res.send(htmlPage(
            modules.favicon(),
            modules.topNav() +
            `
                <h1>${item.title}</h1>
                <p>${item.desc ? item.desc : ""}</p>
                ${
                    item.platforms ? (`<h1>Downloads</h1>
                        ${(function () {
                            let r = "<ul>";
                            for (let i in item.platforms) {
                                r += `<li><h2><a href="/w/${type}/${req.params.id}/${i}">${i.charAt(0).toUpperCase() + i.slice(1)}</a></h2><ul>`;
                                for (let j in item.platforms[i].versions) {
                                    r += `<li><h3><a href="/w/${type}/${req.params.id}/${i}/${j}">${j}</a></h3></li>`
                                }
                                r += "</ul></li>";
                            }
                            r += "</ul>";
                            return r;
                        })()}`
                    ) :
                    ""
                }
            `,
            `${item.title} | ${type.charAt(0).toUpperCase() + type.slice(1)} - Clayton Does Things XYZ`
        ));
    } else {
        res.redirect("/404");
    }
});

app.get(["/w/games/:id/:platform", "/w/games/:id/:platform/:version", "/w/software/:id/:platform", "/w/software/:id/:platform/:version"], (req, res) => {
    var type = req.url.split("/")[2].toLowerCase();
    var item = db[type][req.params.id];
    if (item !== undefined) {
        var platform = item.platforms[req.params.platform];
        if (platform !== undefined) {
            if (platform.versions > 0 && req.params.version ? platform.versions[req.params.version] : true) {
                var version = req.params.version !== undefined ? platform.versions[req.params.version] : platform.versions[Object.keys(platform.versions)[0]];
                if (req.params.platform === "web") {
                    var basePath = `${__dirname}/w/${type}/${req.params.id}/${req.params.platform}/${req.params.version || Object.keys(platform.versions)[0]}`;
                    res.send(htmlPage(
                        modules.favicon() +
                        fs.readFileSync(basePath + ".head", "utf8"),
                        modules.topNav() +
                        fs.readFileSync(basePath + ".body", "utf8")
                    ));
                } else {
                    res.download(`${__dirname}/s/${type}/${req.params.id}/${req.params.platform}/${req.params.version || Object.keys(platform.versions)[0]}/${version.fileName}`)
                }
            } else {
                console.log("Bad Version");
                redirect("/404");
            }
        } else {
            console.log("Bad Platform");
            res.redirect("/404");
        }
    } else {
        console.log("Bad ID");
        res.redirect("/404");
    }
});

app.use(function (req, res, next) {
    console.log(`${req.ip} attempted to reach non-existant page: ${req.url}`);
    res.redirect("/404");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});