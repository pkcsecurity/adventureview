module.exports = {
  corporatePeon: {
    text: `It’s another day at MicroSloth. You're at your desk, idly wondering if your project manager will finally read your email about why this project to automatically identify breeds of birds in photos would take way more than two months of work. All of a sudden, Slack dings. It had been a long time since you heard that sound. Joey from marketing says, "Have you seen this?" and includes a link to pkc.io/apply. You roll your eyes, "Ugh, another company that promises fun and freedom but is really looking for a cog in their money machine."`,
    actiontext: [
      `Still, may as well click the link.`,
      `Nah, I got a good thing going here, I barely have to do anything.`
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
    actiontext: [`Why indeed?`],
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
      `RUN.`,
      `Email your PM. Subject: Tiger. Message: Tiger! Tiger! Help me! Looking forward to hearing from you.`
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
    actiontext: [`Continue...`],
    actions: {
      "1": user => {
        user.location = "desert";
        return user;
      }
    }
  },

  email: {
    text: `You patiently wait by your computer for a response. Meanwhile, the corporate kitten, now tiger, chases a butterfly off in the distance. “Should hear back in the next few days”, you think to yourself.`,
    actiontext: [`Continue to wait.`, `Go wander towards the tiger.`],
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
      `Explore Sand Dunes`,
      `Explore Oasis View`,
      `Wander Aimlessly`,
      `Help the tiger chase the butterfly`
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
    actiontext: [`Attempt Oasis View`, `Head back to Tiger Chasing Butterfly`],
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
    actiontext: [`Explore Sand Dunes`, `Go back to the Tiger`],
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
    actiontext: [`Takes you back to the Desert`],
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
      `Approach the man at the campfire`,
      `Go around the campfire and deeper into the cave`
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
      `Give him the gift card`,
      `Apologize and move on deeper into the cave`
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
    actiontext: [`Start looking for a way out of the cave`],
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
      `Follow the slow voice`,
      `Follow the small voice`,
      `Follow the clear voice`
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
      `Try to explain to the man that you have no food or water.`,
      `Take the tools back to the stream and try to fish.`,
      `Wave your fists and shout, “You NO take from me!”`
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
      `Apologize to the barbarian and offer to help`,
      `Leave the barbarian be and continue out of the cave`
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
    actiontext: [`Continue past the barbarian, out of the cave`],
    actions: {
      "1": user => {
        user.location = "exitCave";
        return user;
      }
    }
  },

  child: {
    text: `A long way down the tunnel you find a child next to a small mound of dirt. The child is vigorously blowing on the dirt as if it were scalding hot soup. When you approach, the child stops blowing long enough to say, “I just got these magic beans! Once you plant them, you have to keep them cool and watered for them to grow. I figured out how to keep them cool, but I don’t have any water! I can’t do this on my own; can you help me?”`,
    actiontext: [
      `Go get some water from the stream`,
      `Continue past the child toward the cave exit`
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
      `Continue on out of the cave`,
      `Turn back and return to the child`
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
    actiontext: [`Continue on out of the cave`],
    actions: {
      "1": user => {
        user.location = "exitCave";
        return user;
      }
    }
  },

  explorer: {
    text: `Not far down the tunnel you find a well-equipped explorer scratching her head. On one wall of the tunnel lies an ornate, and ancient-looking, door mechanism. “I’ve followed the clues this far, I just KNOW there’s a super-rare artifact behind that door! But I can’t decipher this ancient mechanical lock. Do you have any ideas?”`,
    actiontext: [
      `Say, “Nope,” and move past, toward the cave exit`,
      `Investigate the mechanism`
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
      `Continue toward the cave exit`,
      `Decide to take a quick look at the door after all`
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
      `Tell the explorer you don’t know how to open it`,
      `Return to the stream and look for a stone in the riverbed`
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
    actiontext: [`Continue on toward the cave exit`],
    actions: {
      "1": user => {
        user.location = "exitCave";
        return user;
      }
    }
  },

  exitCave: {
    text: `To be continued!`,
    actiontext: [`Yep.`],
    actions: {
      "1": user => {
        user.location = "somewhere?";
        return user;
      }
    }
  }
};
