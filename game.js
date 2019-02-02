module.exports = {
  corporatePeon: {
    text: `It’s another day at MicroSloth. You're at your desk, idly wondering if your project manager will finally read your email about why this project to automatically identify breeds of birds in photos would take way more than two months of work. All of a sudden, Slack dings. It had been a long time since you heard that sound. Joey from marketing says, "Have you seen this?" and includes a link to pkc.io/apply. You roll your eyes, "Ugh, another company that promises fun and freedom but is really looking for a cog in their money machine."`,
    actiontext: [
      `1. Still, may as well click the link.`,
      `2. Nah, I got a good thing going here, I barely have to do anything.`
    ],
    actions: {
      "1": user => {
        user.location = "wilderness";
        return user;
      },
      "2": user => {
        user.location = "quickEnding";
        return user;
      }
    }
  },

  quickEnding: {
    text: `You decide that adventure just isn’t for you. Why rock the boat?`,
    actiontext: [`1. Why indeed?`],
    actions: {
      "1": user => {
        user.state.ending = "bad";
        return user;
      }
    }
  },

  wilderness: {
    text: `The link slowly turns purple. Your desk starts to smell like wet grass. “Am I having a stroke?” you wonder. You look to the left, and notice the kitten on the corporate poster is growing stripes. And looks meaner. And larger. And is looking at you. “RUN!” shouts a hairy barbarian as he streaks past you on your right. Strangely enough, you have to think about it.`,
    actiontext: [
      `1. RUN.`,
      `2. Email your PM. Subject: Tiger. Message: Tiger! Tiger! Help me! Looking forward to hearing from you.`
    ],
    actions: {
      "1": user => {
        user.location = "run";
        return user;
      },
      "2": user => {
        user.location = "email";
        return user;
      }
    }
  },

  run: {
    text: `You flip your desk and start dashing after the barbarian. You hear snarls and the sound of scraping claws behind you as you wish you stuck with your New Year’s resolution to get in shape. After a while, you look behind you and…`,
    actiontext: [`1. Continue...`],
    actions: {
      "1": user => {
        user.location = "desert";
        return user;
      }
    }
  },

  email: {
    text: `You patiently wait by your computer for a response. Meanwhile, the corporate kitten, now tiger, chases a butterfly off in the distance. “Should hear back in the next few days”, you think to yourself.`,
    actiontext: [`1. Continue to wait.`, `2. Go wander towards the tiger.`],
    actions: {
      "1": user => user,
      "2": user => {
        user.location = "desert";
        return user;
      }
    }
  },

  desert: {
    text: `You see that the tiger is chasing a butterfly. You realize that you’re in no danger from it, and also that you’re now in the middle of a vast desert. Off in the distance ahead of you lies an oasis; to your right are sand dunes. `,
    actiontext: [
      `1. Explore Sand Dunes`,
      `2. Explore Oasis View`,
      `3. Wander Aimlessly`,
      `4. Help the tiger chase the butterfly`
    ],
    actions: {
      "1": user => {
        user.location = "sand";
        return user;
      },
      "2": user => {
        user.location = "attemptOasis";
        return user;
      },
      "3": user => {
        user.location = "wander";
        return user;
      },
      "4": user => {
        user.location = "underground";
        return user;
      }
    }
  },

  sand: {
    text: `You traverse up the sand dunes to your right in hopes of getting a better view of the desert around you. You quickly realize the terrain is tricky and you find that with each few steps you take forward, you end up a couple steps back. You take a dozen more steps up the sand dunes and feel yourself tumbling backwards. With nothing to hold onto, you find yourself at the bottom of the dunes.`,
    actiontext: [
      `1. Attempt Oasis View`,
      `2. Head back to Tiger Chasing Butterfly`
    ],
    actions: {
      "1": user => {
        user.location = "attemptOasis";
        return user;
      },
      "2": user => {
        user.location = "desert";
        return user;
      }
    }
  },

  attemptOasis: {
    text: `You trudge towards the palm tree, noticing the blue wavering beneath. “So close…”, you think. Several hills later, it looks just as far off in the distance as before. Like every movie you’ve ever seen with a desert in it, the oasis is a mirage. Not cool...that was supposed to be the ironically correct choice.`,
    actiontext: [`1. Explore Sand Dunes`, `2. Go back to the Tiger`],
    actions: {
      "1": user => {
        user.location = "sand";
        return user;
      },
      "2": user => {
        user.location = "desert";
        return user;
      }
    }
  },

  wander: {
    text: `You wander aimlessly, in hopes of finding an end to the desert or at least any sign of civilization, and seemingly walk in circles. “Didn’t I already pass that rock?” you think to yourself. As your footsteps and thoughts seem to be running in circles, you’re suddenly encircled by a giant cloud of dust and find yourself back to where you see the Tiger chasing the butterfly.`,
    actiontext: [`1. Continue...`],
    actions: {
      "1": user => {
        user.location = "desert";
        return user;
      }
    }
  },

  underground: {
    text: `Just as you join in, the tiger grows weary of following the butterfly and changes his course. Curiosity piques your interest and you continue following the butterfly. Suddenly, the ground beneath you begins to shift and you feel yourself sinking. You (literally) stumble into an underground cave with a stream. Beside the stream is a campfire, at which sits a thin, scraggly-haired man in threadbare clothes with a turtle in his arms.`,
    actiontext: [
      `1. Approach the man at the campfire`,
      `2. Go around the campfire and deeper into the cave`
    ],
    actions: {
      "1": user => {
        user.location = "campfire";
        return user;
      },
      "2": user => {
        user.location = "voices";
        return user;
      }
    }
  },

  campfire: {
    text: `The man looks up at you when you approach. “Excuse me,” he says in a quiet, raspy voice, “but could I trouble you for some change? I’m at the end of my rope.” It’s at this moment you remember that all you have in your wallet is a Chick-fil-A gift card with a remaining balance of $27.34.`,
    actiontext: [
      `1. Give him the gift card`,
      `2. Apologize and move on deeper into the cave`
    ],
    actions: {
      "1": user => {
        user.location = "gratefulBeggar";
        return user;
      },
      "2": user => {
        user.location = "voices";
        return user;
      }
    }
  },

  gratefulBeggar: {
    text: `“Oh, thank you! Now not only will I be able to afford breakfast, but it will be the best fast food breakfast in town. I have nothing to give you in return but my deepest gratitude. Thank you so much. {insert awesome meta tip}”`,
    actiontext: [`1. Start looking for a way out of the cave`],
    actions: {
      "1": user => {
        user.location = "voices";
        return user;
      }
    }
  },

  voices: {
    text: `You begin to notice the sound of faraway voices. You realize there are three tunnels back to the surface; down one you hear a slow, thick voice, grumbling. Down another, you hear a small, high-pitched, and confused-sounding voice. Down the third, you hear a clear and strong voice with a concerned tone.`,
    actiontext: [
      `1. Follow the slow voice`,
      `2. Follow the small voice`,
      `3. Follow the clear voice`
    ],
    actions: {
      "1": user => {
        user.location = "hangry";
        return user;
      },
      "2": user => {
        user.location = "child";
        return user;
      },
      "3": user => {
        user.location = "explorer";
        return user;
      }
    }
  },

  hangry: {
    text: `The voice’s owner, turns out to be a familiar-looking barbarian. “GRAH! I… stomach… grumbling! Mouth dry. YOU! You have food? Drink? I take it from you!” You perceive that his words pose more of a question than a threat. Beside the barbarian lie an assortment of crude tools, among which you see a large bowl and a fishing net.`,
    actiontext: [
      `1. Try to explain to the man that you have no food or water.`,
      `2. Take the tools back to the stream and try to fish.`,
      `3. Wave your fists and shout, “You NO take from me!”`
    ],
    actions: {
      "1": user => user,
      "2": user => {
        user.location = "wisdom";
        return user;
      },
      "3": user => {
        user.location = "sadgry";
        return user;
      }
    }
  },

  sadgry: {
    text: `You get ready for a fight with the barbarian, but instead you see his face contort into one of misery. “I... no... take? I hungry… I starve!” he says, as he turns into a blubbery heap.`,
    actiontext: [
      `1. Apologize to the barbarian and offer to help`,
      `2. Leave the barbarian be and continue out of the cave`
    ],
    actions: {
      "1": user => {
        user.location = "hangry";
        return user;
      },
      "2": user => {
        user.location = "exitCave";
        return user;
      }
    }
  },

  wisdom: {
    text: `It isn’t long before you return from the stream with a bowl full of water and a fresh fish in the net. After a grotesque chowdown, the barbarian turns to you and says, “Ahhh, thank you my good fellow. The lack of sustenance had really taken its toll on my speech! I may seem rough, but I’m no dummy. I’ve spent decades developing the best window manager on the planet. You’ve really helped me out - here, I want you to have it.”\nYou receive the Window Manager of Wisdom!`,
    actiontext: [`1. Continue past the barbarian, out of the cave`],
    actions: {
      "1": user => {
        user.location = "exitCave";
        user.state.wisdom = true;
        return user;
      }
    }
  },

  child: {
    text: `A long way down the tunnel you find a child next to a small mound of dirt. The child is vigorously blowing on the dirt as if it were scalding hot soup. When you approach, the child stops blowing long enough to say, “I just got these magic beans! Once you plant them, you have to keep them cool and watered for them to grow. I figured out how to keep them cool, but I don’t have any water! I can’t do this on my own; can you help me?”`,
    actiontext: [
      `1. Go get some water from the stream`,
      `2. Continue past the child toward the cave exit`
    ],
    actions: {
      "1": user => {
        user.location = "humility";
        return user;
      },
      "2": user => {
        user.location = "nobeans";
        return user;
      }
    }
  },

  nobeans: {
    text: `The child calls after you, “Wait! How am I supposed to get water and keep this plant cool at the same time? Help!”`,
    actiontext: [
      `1. Continue on out of the cave`,
      `2. Turn back and return to the child`
    ],
    actions: {
      "1": user => {
        user.location = "exitCave";
        return user;
      },
      "2": user => {
        user.location = "child";
        return user;
      }
    }
  },

  humility: {
    text: `The beans drink up the water instantly. Both you and the child gaze in wonder as the beans grow taller and larger than the both of you combined! The plant starts growing toward the tunnel’s exit, and as it does, it begins sprouting what look like little yellow fruits. You pick one off, and on closer inspection, the “fruit” is really a rubber duck!\nYou receive the Rubber Duck of Humility!`,
    actiontext: [`1. Continue on out of the cave`],
    actions: {
      "1": user => {
        user.location = "exitCave";
        user.state.humility = true;
        return user;
      }
    }
  },

  explorer: {
    text: `Not far down the tunnel you find a well-equipped explorer scratching her head. On one wall of the tunnel lies an ornate, and ancient-looking, door mechanism. “I’ve followed the clues this far, I just KNOW there’s a super-rare artifact behind that door! But I can’t decipher this ancient mechanical lock. Do you have any ideas?”`,
    actiontext: [
      `1. Say, “Nope,” and move past, toward the cave exit`,
      `2. Investigate the mechanism`
    ],
    actions: {
      "1": user => {
        user.location = "sadExplorer";
        return user;
      },
      "2": user => {
        user.location = "doorPuzzle";
        return user;
      }
    }
  },

  sadExplorer: {
    text: `“And I had come all this way… all my life’s work leading up to finding this place… it just can’t be a dead end, it just can’t!” moans the explorer dejectedly as you leave.`,
    actiontext: [
      `1. Continue toward the cave exit`,
      `2. Decide to take a quick look at the door after all`
    ],
    actions: {
      "1": user => {
        user.location = "caveExit";
        return user;
      },
      "2": user => {
        user.location = "doorPuzzle";
        return user;
      }
    }
  },

  doorPuzzle: {
    text: `You take a closer look at the door mechanism. You find a series of indentations in the door, each of a different size and shape. When you look inside them, you notice that all of them except one have a small, smooth stone inside.`,
    actiontext: [
      `1. Tell the explorer you don’t know how to open it`,
      `2. Return to the stream and look for a stone in the riverbed`
    ],
    actions: {
      "1": user => {
        user.location = "sadExplorer";
        return user;
      },
      "2": user => {
        user.location = "integrity";
        return user;
      }
    }
  },

  integrity: {
    text: `You find a stone that looks roughly the same shape as the indentation in the door. When you place the stone inside, you hear a resounding crack as the door moves for the first time in centuries. The explorer enters the chamber in awe, and you follow her in. “Wow, that was brilliant!” she says. “Thanks for your help! It looks like there’s not one, but two artifacts in here - I never could have found them without you, so please take one; I insist!” The artifact is a heavy stone shaped like the number 2.\nYou receive the Integer of Integrity!`,
    actiontext: [`1. Continue on toward the cave exit`],
    actions: {
      "1": user => {
        user.location = "exitCave";
        user.state.integrity = true;
        return user;
      }
    }
  },

  exitCave: {
    text: `You emerge from the cave and find yourself in front of a tall house shining with glass. The sound of birds echos around you, a summer breeze is blowing, and off in the distance you can faintly hear the ocean crashing.\nA giant pops his head out the top window and looks as if he recognizes you. "You're just in time!", he rumbles, opening the normal size door below with his toes.`,
    actiontext: [
      `1. Step through the door`,
      `2. Thank the giant for his kind offer, then ditch him for the beach.`
    ],
    actions: {
      "1": user => {
        user.location = "house";
        return user;
      },
      "2": user => {
        user.location = "beach";
        return user;
      }
    }
  },

  beach: {
    text: `Rather than deal with giants, you walk along the beach and watch the sunset. Maybe today isn't the right day to attempt the impossible...`,
    actiontext: [`1. Continue`],
    actions: {
      "1": user => {
        user.state.ending = "bad";
        return user;
      }
    }
  },

  house: {
    text: `You step through the doorway. "Hello?", your voice calls into the hallway. Walking down the hallway, you notice a sign over the first room that says "Interview". You step inside, and see a man sleeping, covered in cobwebs. That's weird, but not as weird as the fact that there's a lack of ambient noise to your left, along with a creeping feeling of dread.`,
    actiontext: [`1. Turn left`, `2. Leave, and never return`],
    actions: {
      "1": user => {
        user.location = "whiteboard";
        return user;
      },
      "2": user => {
        user.location = "fleehouse";
        return user;
      }
    }
  },

  fleehouse: {
    text: `You quickly turn to the right and run past the giant's large and quite hairy foot right out the door. The giant looks down from a blissful moment of peace and his eyes grow large. "You were supposed to be the chosen one!" he says theatrically, his intonation rising with each word. Once you've put some distance between yourself and that dreadful room, you decide to walk slowly to the beach and watch the sun set.`,
    actiontext: [`1. Continue`],
    actions: {
      "1": user => {
        user.state.ending = "bad";
        return user;
      }
    }
  },

  whiteboard: {
    text: `You turn, tense with anticipation, to see the EMPTY WHITEBOARD. It hangs, mockingly, swallowing thought, sound, and space. In it you see your worst fear: that you are an imposter, and not one to challenge the emptiness that is your unwritten masterpiece. The whiteboard calls to you, "Who are YOU to write on the whiteboard of your life!?"`,
    actiontext: [
      `1. Defiantly grab a marker and start writing furiously`,
      `2. Leave, and never return`
    ],
    actions: {
      "1": user => {
        user.location = "fightwhiteboard";
        return user;
      },
      "2": user => {
        user.location = "fleehouse";
        return user;
      }
    }
  },

  fightwhiteboard: {
    text: `The whiteboard shrieks with agony as you cover it with flowcharts, code that actually compiles, and excellent documentation that's brief enough to be useful. You steeple your fingers at the end and smile. "You're no match for me today, emptiness." You feel amazing. You've shipped.`,
    actiontext: [`1. Continue`],
    actions: {
      "1": user => {
        user.location = "partners";
        return user;
      }
    }
  },

  partners: {
    text: `In the midst of your victory you hear three voices animatedly chatting with each other about topics ranging from space lasers to upsell potential. In walk THE PARTNERS.\n"CONGRATUATIONS", bellows the CONSULTINATOR. "YOU MADE IT TO DA CHOPPA!".\n"I appreciate your fine work here", the youthful partner with grey hair calmly intonates. "This provides excellent value for our clients."\n"WOW, I LIKE YOUR PERFORMANCE MORE THAN I LIKE TURTLES!" squeals the last partner. "Have you considered trying to solve impossible problems?"`,
    actiontext: [`1. YES`],
    actions: {
      "1": user => {
        user.state.ending = "good";
        return user;
      }
    }
  }
};
