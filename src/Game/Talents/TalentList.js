const TalentList = [
    //#region AGILITY
    //AGI Quick Reactions I
    {
      Title: "Quick Reactions I",
      id: "QuiRea1",
      Types: ["Agility"],
      Description: "Your base initiative is increased by 2.",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI Quick Reactions II
    {
      Title: "Quick Reactions II",
      id: "QuiRea2",
      Types: ["Agility"],
      Description: "Your base initiative is increased by 2.",
      Requirements: [{ type: "Agility", value: 3, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI Quick Reactions III
    {
      Title: "Quick Reactions III",
      id: "QuiRea3",
      Types: ["Agility"],
      Description: "Your base initiative is increased by 2.",
      Requirements: [{ type: "Agility", value: 5, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI High Alert
    {
      Title: "High Alert I",
      id: "HigAle1",
      Types: ["Agility"],
      Description:
        "For the first round only, your initative is increased by 6. (Usable: once/combat)",
      Requirements: [{ type: "Agility", value: 2, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI High Alert
    {
      Title: "High Alert II",
      id: "HigAle2",
      Types: ["Agility"],
      Description:
        "For the first round only, your initative is increased by 6. (Usable: once/combat)",
      Requirements: [{ type: "Agility", value: 4, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Light-footed I
    {
      Title: "Light-footed I",
      id: "LigFoo1",
      Types: ["Agility"],
      Description:
        "You have +1 in Acrobatics checks. \nTwilights has a value of +1 during Acrobatics checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1.)",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI Light-footed II
    {
      Title: "Light-footed II",
      id: "LigFoo2",
      Types: ["Agility"],
      Description:
        "You may draw an additional card in the act of Acrobatic. (Once/Action)",
      Requirements: [{ type: "Agility", value: 3, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Light-footed III
    {
      Title: "Light-footed III",
      id: "LigFoo3",
      Types: ["Agility"],
      Description:
        "You have +2 in Acrobatics checks. \nYou may draw 1 additional card during Acrobatic checks then remove 1 card of your choice. \n\nIn addition to its other effects, Twilights are considered a Critical Success during Acrobatic Checks.",
      Requirements: [{ type: "Agility", value: 5, color: "#1bf740" }],
      Cost: "15",
    },
    //AGI Stealth I
    {
      Title: "Stealth I",
      id: "Stealth1",
      Types: ["Agility"],
      Description:
        "You have +1 to Stealth checks. \nTwilights have a value of +1 during stealth checks.\n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI Stealth II
    {
      Title: "Stealth II",
      id: "Stealth2",
      Types: ["Agility"],
      Description:
        "Draw an additional card during Stealth checks (Once/Action)",
      Requirements: [{ type: "Agility", value: 3, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Stealth III
    {
      Title: "Stealth III",
      id: "Stealth3",
      Types: ["Agility"],
      Description:
        "You have +2 in Stealth checks. \nYou may draw 1 additional card in the act of Stealth then remove 1 card of your choice. \n\nIn addition to its other effects, Twilight are considered a Critical Success during Stealth Checks. ",
      Requirements: [{ type: "Agility", value: 5, color: "#1bf740" }],
      Cost: "15",
    },
    //AGI Disarm Trap I
    {
      Title: "Disarm Trap I",
      id: "DisTra1",
      Types: ["Agility"],
      Description:
        "You have +1 to Disarm Trap checks. \nTwilights have a value of +1 during Disarm Trap checks.\n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI Disarm Trap II
    {
      Title: "Disarm Trap II",
      id: "DisTra2",
      Types: ["Agility"],
      Description:
        "Draw an additional card during Disarm Trap checks (Once/Action)",
      Requirements: [{ type: "Agility", value: 3, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Disarm Trap III
    {
      Title: "Disarm Trap III",
      id: "DisTra3",
      Types: ["Agility"],
      Description:
        "You have +2 in Disarm Trap checks. \nYou may draw 1 additional card in the act of Disarm Trap then remove 1 card of your choice. \n\nIn addition to its other effects, Twilight are considered a Critical Success during Disarm Trap Checks. ",
      Requirements: [{ type: "Agility", value: 5, color: "#1bf740" }],
      Cost: "15",
    },
    //AGI Lock Picking I
    {
      Title: "Lock Picking I",
      id: "LocPic1",
      Types: ["Agility"],
      Description:
        "You have +1 to Lock Picking checks. \nTwilights have a value of +1 during Lock Picking checks.\n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Agility", value: 1, color: "#1bf740" }],
      Cost: "5",
    },
    //AGI Lock Picking II
    {
      Title: "Lock Picking II",
      id: "LocPic2",
      Types: ["Agility"],
      Description:
        "Draw an additional card during Lock Picking checks (Once/Action)",
      Requirements: [{ type: "Agility", value: 3, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Lock Picking III
    {
      Title: "Lock Picking III",
      id: "LocPic3",
      Types: ["Agility"],
      Description:
        "You have +2 in Lock Picking checks. \nYou may draw 1 additional card in the act of Lock Picking then remove 1 card of your choice. \n\nIn addition to its other effects, Twilight are considered a Critical Success during Lock Picking Checks. ",
      Requirements: [{ type: "Agility", value: 5, color: "#1bf740" }],
      Cost: "15",
    },
    //AGI Nimble Feet
    {
      Title: "Nimble Feet I",
      id: "NimFee1",
      Types: ["Agility"],
      Description:
        "When using a movement action you may ignore and move over minor obstacles and terrain.",
      Requirements: [{ type: "Agility", value: 2, color: "#1bf740" }],
      Cost: "10",
    },
    //AGI Twilight Blood
    {
      Title: "Twilight Blood",
      id: "TwiBlo",
      Types: ["Agility"],
      Description:
        "(You may not have more than 3 Feats named Twilight) The maximum number of Twilight cards are increased by 1. \nAdd one Twilight card to your Action deck.",
      Requirements: [{ type: "Agility", value: 4, color: "#1bf740" }],
      Cost: "15",
    },
    //#endregion AGILITY

    //#region BODY
    //BOD Orcish Strength I
    {
      Title: "Orcish Strength I",
      id: "OrcStr1",
      Types: ["Body"],
      Description:
        "You have +1 to Strength checks. \nTwilights have a value of +1 during Strength checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilight in your deck is 1).",
      Requirements: [{ type: "Body", value: 1, color: "#F75A1B" }],
      Cost: "5",
    },
    //BOD Orcish Strength II
    {
      Title: "Orcish Strength II",
      id: "OrcStr2",
      Types: ["Body"],
      Description:
        "Draw an additional card during a Strength check. (Usable: Once/Action)",
      Requirements: [{ type: "Body", value: 3, color: "#F75A1B" }],
      Cost: "10",
    },
    //BOD Orcish Strength III
    {
      Title: "Orcish Strength III",
      id: "OrcStr3",
      Types: ["Body"],
      Description:
        "You have +2 in Strength checks. \n You may draw 1 additional card during Strength checks then remove 1 card of your choice. \n\n In addition to its other effects, Twilights are considered a Critical Success during Strength checks.",
      Requirements: [{ type: "Body", value: 4, color: "#F75A1B" }],
      Cost: "15",
    },
    //BOD Climber I
    {
      Title: "Climber I",
      id: "Climber1",
      Types: ["Body"],
      Description:
        "You have +1 to Climbing checks. \nTwilights have a value of +1 during Climbing checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilight in your deck is 1).",
      Requirements: [{ type: "Body", value: 1, color: "#F75A1B" }],
      Cost: "5",
    },
    //BOD Climber II
    {
      Title: "Climber II",
      id: "Climber2",
      Types: ["Body"],
      Description:
        "Draw an additional card during a Climbing check. (Usable: Once/Action)",
      Requirements: [{ type: "Body", value: 3, color: "#F75A1B" }],
      Cost: "10",
    },
    //BOD Climber III
    {
      Title: "Climber III",
      id: "Climber3",
      Types: ["Body"],
      Description:
        "You have +2 in Climbing checks. \n You may draw 1 additional card during Climbing checks then remove 1 card of your choice. \n\n In addition to its other effects, Twilights are considered a Critical Success during Climbing checks.",
      Requirements: [{ type: "Body", value: 4, color: "#F75A1B" }],
      Cost: "15",
    },
    //BOD Steel Body I
    {
      Title: "Steel Body I",
      id: "SteBod1",
      Types: ["Body"],
      Description:
        "Whenever you are hit by a physical attack you may ignore any negative conditions that would affect you by that attack. (Usable once/combat)",
      Requirements: [{ type: "Body", value: 2, color: "#F75A1B" }],
      Cost: "10",
    },
    //BOD Steel Body II
    {
      Title: "Steel Body II",
      id: "SteBod2",
      Types: ["Body"],
      Description:
        "In addition to its other effects, Steel Body now also halves the damage taken by the attack rounded down.",
      Requirements: [{ type: "Body", value: 3, color: "#F75A1B" }],
      Cost: "10",
    },
    //BOD Resilient I
    {
      Title: "Resilient I",
      id: "Resilient1",
      Types: ["Body"],
      Description: "Increase your maximum health by 10.",
      Requirements: [{ type: "Body", value: 1, color: "#F75A1B" }],
      Cost: "5",
    },
    //BOD Resilient II
    {
      Title: "Resilient II",
      id: "Resilient2",
      Types: ["Body"],
      Description: "Increase your maximum health by 15.",
      Requirements: [{ type: "Body", value: 3, color: "#F75A1B" }],
      Cost: "10",
    },
    //BOD Resilient III
    {
      Title: "Resilient III",
      id: "Resilient3",
      Types: ["Body"],
      Description: "Increase your maximum health by 15.",
      Requirements: [{ type: "Body", value: 5, color: "#F75A1B" }],
      Cost: "15",
    },
    //BOD Resilient IV
    {
      Title: "Resilient IV",
      id: "Resilient4",
      Types: ["Body"],
      Description:
        "Increase your maximum health by 3 for each point in Body you have.",
      Requirements: [{ type: "Body", value: 7, color: "#F75A1B" }],
      Cost: "15",
    },
    //BOD Carrier I
    {
      Title: "Carrier I",
      id: "Carrier1",
      Types: ["Body"],
      Description: "You encumber limit is increased by 8kg.",
      Requirements: [{ type: "Body", value: 1, color: "#F75A1B" }],
      Cost: "5",
    },
    //BOD Carrier II
    {
      Title: "Carrier II",
      id: "Carrier2",
      Types: ["Body"],
      Description: "You encumber limit is increased by 8kg.",
      Requirements: [{ type: "Body", value: 3, color: "#F75A1B" }],
      Cost: "5",
    },
    //BOD Carrier III
    {
      Title: "Carrier III",
      id: "Carrier3",
      Types: ["Body"],
      Description: "You encumber limit is increased by 12kg.",
      Requirements: [{ type: "Body", value: 5, color: "#F75A1B" }],
      Cost: "10",
    },
    //BOD Carrier IV
    {
      Title: "Carrier IV",
      id: "Carrier4",
      Types: ["Body"],
      Description:
        "You encumber limit is increased by 2 for each point in Body",
      Requirements: [{ type: "Body", value: 7, color: "#F75A1B" }],
      Cost: "15",
    },
    //BOD NaturalArmour
    {
      Title: "Natural Armour",
      id: "NatArm",
      Types: ["Body"],
      Description:
        "While you don't have any Armour equipped you have Armour 2.",
      Requirements: [{ type: "Body", value: 2, color: "#F75A1B" }],
      Cost: "10",
    },
    //BOD Poison Immunity
    {
      Title: "Poison Immunity",
      id: "PoiImm",
      Types: ["Body"],
      Description:
        "Chose a type of poison, you are immune to intake of the chosen poison in the form of food or drink. \n\nPoison types include: Physical Immobilizing (Sedative, Paralyzing, etc), Deadly and Mind Altering.",
      Requirements: [{ type: "Body", value: 5, color: "#F75A1B" }],
      Cost: "15",
    },
    //#endregion BODY

    //#region MIND

    //MND Insight I
    {
      Title: "Insight I",
      id: "Insight1",
      Types: ["Mind"],
      Description:
        "You always have +1 to any Reading checks. \nTwilights has a value of +1 during Reading checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Insight II
    {
      Title: "Insight II",
      id: "Insight2",
      Types: ["Mind"],
      Description:
        "Draw an additional card during Reading checks (Once/Action)",
      Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Insight III
    {
      Title: "Insight III",
      id: "Insight3",
      Types: ["Mind"],
      Description:
        "You have +2 in Reading checks. \nYou may draw 1 additional card in the act of Reading then remove 1 card of your choice. \n\nIn addition to its other effects, Twilights are considered a Critical Success during Reading Checks.",
      Requirements: [{ type: "Mind", value: 5, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Knw: History I
    {
      Title: "Knowledge: History I",
      id: "KnoHis1",
      Types: ["Mind"],
      Description:
        "You always have +1 to any Knowledge: History checks. \nTwilights has a value of +1 during Knowledge: History checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Knw: History II
    {
      Title: "Knowledge: History II",
      id: "KnoHis2",
      Types: ["Mind"],
      Description:
        "Draw an additional card during Knowledge: History checks (Once/Action)",
      Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Knw: History III
    {
      Title: "Knowledge: History III",
      id: "KnoHis3",
      Types: ["Mind"],
      Description:
        "You have +2 in Knowledge: History checks. \nYou may draw 1 additional card in the act of Knowledge: History then remove 1 card of your choice. \n\nIn addition to its other effects, Twilights are considered a Critical Success during Knowledge: History Checks.",
      Requirements: [{ type: "Mind", value: 5, color: "#5db8d9" }],
      Cost: "10",
    },

    //MND Knw: Culture I
    {
      Title: "Knowledge: Culture I",
      id: "KnoCul1",
      Types: ["Mind"],
      Description:
        "You always have +1 to any Knowledge: Culture checks. \nTwilights has a value of +1 during Knowledge: Culture checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Knw: Culture II
    {
      Title: "Knowledge: Culture II",
      id: "KnoCul2",
      Types: ["Mind"],
      Description:
        "Draw an additional card during Knowledge: Culture checks (Once/Action)",
      Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Knw: Culture III
    {
      Title: "Knowledge: Culture III",
      id: "KnoCul3",
      Types: ["Mind"],
      Description:
        "You have +2 in Knowledge: Culture checks. \nYou may draw 1 additional card in the act of Knowledge: Culture then remove 1 card of your choice. \n\nIn addition to its other effects, Twilights are considered a Critical Success during Knowledge: Culture Checks.",
      Requirements: [{ type: "Mind", value: 5, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Investigator I
    {
      Title: "Investigator I",
      id: "Investigator1",
      Types: ["Mind"],
      Description:
        "You always have +1 to any Investigation checks. \nTwilights has a value of +1 during Investigation checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Investigator II
    {
      Title: "Investigator II",
      id: "Investigator2",
      Types: ["Mind"],
      Description:
        "Draw an additional card during Investigation checks (Once/Action)",
      Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Investigator III
    {
      Title: "Investigator III",
      id: "Investigator3",
      Types: ["Mind"],
      Description:
        "You have +2 in Investigation checks.\nYou may draw 1 additional card in the act of Investigation then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Investigation checks.",
      Requirements: [{ type: "Mind", value: 5, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Sharp Sight I
    {
      Title: "Sharp Sight I",
      id: "ShaSig1",
      Types: ["Mind"],
      Description:
        "You always have +1 to any Perception checks. \nTwilights has a value of +1 during Perception checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Sharp Sight II
    {
      Title: "Sharp Sight II",
      id: "ShaSig2",
      Types: ["Mind"],
      Description:
        "Draw an additional card during Perception checks (Once/Action)",
      Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Sharp Sight III
    {
      Title: "Sharp Sight III",
      id: "ShaSig3",
      Types: ["Mind"],
      Description:
        "You have +2 in Perception checks.\nYou may draw 1 additional card in the act of Perception then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Perception checks.",
      Requirements: [{ type: "Mind", value: 5, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND StrongWill I
    {
      Title: "Strong Will I",
      id: "StrWil1",
      Types: ["Mind"],
      Description:
        "Whenever you are attacked by a spell you may ignore any negative conditions that would affect you by that spell.(Usable: once/combat",
      Requirements: [{ type: "Mind", value: 2, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND StrongWill II
    {
      Title: "Strong Will II",
      id: "StrWil2",
      Types: ["Mind"],
      Description:
        "In addition to its other effects Strong Will now also halves the damage you take by the attack rounded down and can now also be used twize/combat",
      Requirements: [{ type: "Mind", value: 4, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Knowledge: Medicine I
    {
      Title: "Knowledge: Medicine I",
      id: "KnoMed1",
      Types: ["Mind"],
      Description:
        "You always have +1 to any Knowledge: Medicine checks. \nTwilights has a value of +1 during Knowledge: Medicine checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mind", value: 1, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Knowledge: Medicine II
    {
      Title: "Knowledge: Medicine II",
      id: "KnoMed2",
      Types: ["Mind"],
      Description:
        "Draw an additional card during Knowledge: Medicine checks (Once/Action)",
      Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Knowledge: Medicine III
    {
      Title: "Knowledge: Medicine III",
      id: "KnoMed3",
      Types: ["Mind"],
      Description:
        "You have +2 in Knowledge: Medicine checks.\nYou may draw 1 additional card in the act of Knowledge: Medicine then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Knowledge: Medicine checks.",
      Requirements: [{ type: "Mind", value: 5, color: "#5db8d9" }],
      Cost: "10",
    },
    //MND Lethal Expertise I
    {
          Title: "Lethal Expertise I",
          id: "LetExp1",
          Types: ["Mind"],
          Description: "Poison and Bleed has 1 additional charge.",       
          Requirements: [{ type: "Mind", value: 3, color: "#5db8d9" }],
          Cost: "10",
    },
    //MND Lethal Expertise II
    {
          Title: "Lethal Expertise II",
          id: "LetExp2",
          Types: ["Mind"],
          Description: "Poison and Bleed has 1 additional charge.",       
          Requirements: [{ type: "Mind", value: 5, color: "#5db8d9" }],
          Cost: "10",
    },
    //MND Lethal Expertise III
    {
          Title: "Lethal Expertise III",
          id: "LetExp3",
          Types: ["Mind"],
          Description: "Poison and Bleed has 1 additional charge.",       
          Requirements: [{ type: "Mind", value: 7, color: "#5db8d9" }],
          Cost: "10",
    },
    //MND Field Medic I
    {
      Title: "Field Medic I",
      id: "FieMed1",
      Types: ["Mind"],
      Description:
        "-Reaction-\nAt any moment during your turn: Consuming medical herbs you may do a Knowledge: Medicine check to do one of the following:\n- Remove a Death token and grant a Life token to a dying creature.\n- Remove a non-permanent infliction on target creature.\n\nRange: Touch",
      Requirements: [{ type: "Mind", value: 2, color: "#5db8d9" }],
      Cost: "5",
    },
    //MND Field Medic II
    {
      Title: "Field Medic II",
      id: "FieMed2",
      Types: ["Mind"],
      Description:
        "In addition to its other effects Field medic will now also:\n- Grant another Life token to the dying creature.\n- Remove any infliction instead of a non-permanent one.",
      Requirements: [{ type: "Mind", value: 2, color: "#5db8d9" }],
      Cost: "5",
    },
    //#endregion MIND

    //#region MYSTIC
    //MSC Knowledge: Religion I
    {
      Title: "Knowledge: Religion I",
      id: "KnoRel1",
      Types: ["Mystic"],
      Description:
        "You always have +1 to any Knowledge: Religion checks. \nTwilights has a value of +1 during Knowledge: Religion checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mystic", value: 1, color: "#d44ecb" }],
      Cost: "5",
    },
    //MSC Knowledge: Religion II
    {
      Title: "Knowledge: Religion II",
      id: "KnoRel2",
      Types: ["Mystic"],
      Description:
        "Draw an additional card during Knowledge: Religion checks (Once/Action)",
      Requirements: [{ type: "Mystic", value: 3, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Knowledge: Religion III
    {
      Title: "Knowledge: Religion III",
      id: "KnoRel3",
      Types: ["Mystic"],
      Description:
        "You have +2 in Knowledge: Religion checks.\nYou may draw 1 additional card in the act of Knowledge: Religion then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Knowledge: Religion checks.",
      Requirements: [{ type: "Mystic", value: 5, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Knowledge: Alchemy I
    {
      Title: "Knowledge: Alchemy I",
      id: "KnoAlc1",
      Types: ["Mystic"],
      Description:
        "You always have +1 to any Knowledge: Alchemy checks. \nTwilights has a value of +1 during Knowledge: Alchemy checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Mystic", value: 1, color: "#d44ecb" }],
      Cost: "5",
    },
    //MSC Knowledge: Alchemy II
    {
      Title: "Knowledge: Alchemy II",
      id: "KnoAlc2",
      Types: ["Mystic"],
      Description:
        "Draw an additional card during Knowledge: Alchemy checks (Once/Action)",
      Requirements: [{ type: "Mystic", value: 3, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Knowledge: Alchemy III
    {
      Title: "Knowledge: Alchemy III",
      id: "KnoAlc3",
      Types: ["Mystic"],
      Description:
        "You have +2 in Knowledge: Alchemy checks.\nYou may draw 1 additional card in the act of Knowledge: Alchemy then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Knowledge: Alchemy checks.",
      Requirements: [{ type: "Mystic", value: 5, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Invasive Mind I
    {
      Title: "Invasive Mind I",
      id: "InvMin1",
      Types: ["Mystic"],
      Description:
        "The difficulty of checks caused by your inflictions/attacks are increased by 1.",
      Requirements: [{ type: "Mystic", value: 1, color: "#d44ecb" }],
      Cost: "5",
    },
    //MSC Invasive Mind II
    {
      Title: "Invasive Mind II",
      id: "InvMin2",
      Types: ["Mystic"],
      Description:
        "The difficulty of checks caused by your inflictions/attacks are increased by 1.",
      Requirements: [{ type: "Mystic", value: 3, color: "#d44ecb" }],
      Cost: "5",
    },
    //MSC Invasive Mind III
    {
      Title: "Invasive Mind III",
      id: "InvMin3",
      Types: ["Mystic"],
      Description:
        "The difficulty of checks caused by your inflictions/attacks are increased by 1.",
      Requirements: [{ type: "Mystic", value: 5, color: "#d44ecb" }],
      Cost: "5",
    },
    //MSC Invasive Mind IV
    {
      Title: "Invasive Mind IV",
      id: "InvMin4",
      Types: ["Mystic"],
      Description:
        "The difficulty of checks caused by your inflictions/attacks are increased by 1.",
      Requirements: [{ type: "Mystic", value: 7, color: "#d44ecb" }],
      Cost: "5",
    },
    //MSC Ward Maker I
    {
      Title: "Ward Maker I",
      id: "WarMak1",
      Types: ["Mystic"],
      Description:
        "Do a Knowledge: Arcane check and a 10min ritual spending material worth 10gold." +
        "You are able to make a ward of the chosen type." +
        "The range of the ward is 5+ (2 x Mystics) in meters and lasts for 8h.\n\n" +
        "-Evil Ward: The warded area is invisible to the ill intended.\n" +
        "-Wanderer Ward: The warded area is invisible to the chosen creature type. (Spirits, Beasts, Humanoid, etc)\n" +
        "-Spell ward: Magical or Divine effects ends and can't be inflicted in the warded area.",
      Requirements: [{ type: "Mystic", value: 2, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Ward Maker II
    {
      Title: "Ward Maker II",
      id: "WarMak2",
      Types: ["Mystic"],
      Description:
        "Wards range is now 8 + (3 x Mystics) in meters and lasts 12h.\n\n" +
        "In addition to its other effects:\n" +
        "You can now reset the duration by making another cost free ritual.\n" +
        "Wards now also causes warded creatures to avoid the warded area.\n" +
        "Spell Ward now also blocks spells from entering the warded area.\n",
      Requirements: [{ type: "Mystic", value: 4, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Trained Spirit I
    {
      Title: "Trained Spirit I",
      id: "TraSpi1",
      Types: ["Mystic"],
      Description: "Your max Spirit is increased by 15.",
      Requirements: [{ type: "Mystic", value: 1, color: "#d44ecb" }],
      Cost: "5",
    },
    //MSC Trained Spirit II
    {
      Title: "Trained Spirit II",
      id: "TraSpi2",
      Types: ["Mystic"],
      Description: "Your max Spirit is increased by 20.",
      Requirements: [{ type: "Mystic", value: 3, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Trained Spirit III
    {
      Title: "Trained Spirit III",
      id: "TraSpi3",
      Types: ["Mystic"],
      Description: "Your max Spirit is increased by 25.",
      Requirements: [{ type: "Mystic", value: 5, color: "#d44ecb" }],
      Cost: "15",
    },
    //MSC Twilight Spirit
    {
      Title: "Twilight Spirit",
      id: "TwiSpi",
      Types: ["Mystic"],
      Description:
        "(You may not have more than 3 Feats named Twilight) The maximum number of Twilight cards are increased by 1. \nAdd one Twilight card to your Action deck.",
      Requirements: [{ type: "Mystic", value: 4, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Divine Rituals I
    {
      Title: "Divine Rituals I",
      id: "DivRit1",
      Types: ["Mystic"],
      Description:
        "Make a Knowledge: Religion check to make a 10 min ritual to connect with a specific divine or demonic entity.",
      Requirements: [{ type: "Mystic", value: 3, color: "#d44ecb" }],
      Cost: "10",
    },
    //MSC Divine Rituals II
    {
      Title: "Divine Rituals II",
      id: "DivRit2",
      Types: ["Mystic"],
      Description:
        "You have a +1 to Knowledge: Religion checks for the purpose of Divine Rituals.\n\nIn addition to its other effects: With a Knowledge: Religion check you are able to fully understand a ritual of divine or demonic nature and what it is trying to accomplish.",
      Requirements: [{ type: "Mystic", value: 5, color: "#d44ecb" }],
      Cost: "5",
    },
    //#endregion MYSTIC

    //#region PRESENCE

    //PRS Performer I
    {
      Title: "Performer I",
      id: "Performer1",
      Types: ["Presence"],
      Description:
        "You have +1 in Performance checks. \nTwilights has a value of +1 during Performance checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Presence", value: 1, color: "#ebff65" }],
      Cost: "5",
    },
    //PRS Performer II
    {
      Title: "Performer II",
      id: "Performer2",
      Types: ["Presence"],
      Description:
        "You may draw an additional card in the act of a Performance. (Usable: once/action)",
      Requirements: [{ type: "Presence", value: 3, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Performer III
    {
      Title: "Performer III",
      id: "Performer3",
      Types: ["Presence"],
      Description:
        "You have +2 in Performance checks.\nYou may draw 1 additional card in the act of Performance then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Performance checks.",
      Requirements: [{ type: "Presence", value: 5, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Snakes Tongue I
    {
      Title: "Snakes Tongue I",
      id: "SnaTon1",
      Types: ["Presence"],
      Description:
        "You have +1 in Deception checks. \nTwilights has a value of +1 during Deception checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Presence", value: 1, color: "#ebff65" }],
      Cost: "5",
    },
    //PRS Snakes Tongue II
    {
      Title: "Snakes Tongue II",
      id: "SnaTon2",
      Types: ["Presence"],
      Description:
        "You may draw an additional card in the act of a Deception. (Usable: once/action)",
      Requirements: [{ type: "Presence", value: 3, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Snakes Tongue III
    {
      Title: "Snakes Tongue III",
      id: "SnaTon3",
      Types: ["Presence"],
      Description:
        "You have +2 in Deception checks.\nYou may draw 1 additional card in the act of Deception then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Deception checks.",
      Requirements: [{ type: "Presence", value: 5, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Silver Tongue I
    {
      Title: "Silver Tongue I",
      id: "SilTon1",
      Types: ["Presence"],
      Description:
        "You have +1 in Persuasion checks. \nTwilights has a value of +1 during Persuasion checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Presence", value: 1, color: "#ebff65" }],
      Cost: "5",
    },
    //PRS Silver Tongue II
    {
      Title: "Silver Tongue II",
      id: "SilTon2",
      Types: ["Presence"],
      Description:
        "You may draw an additional card in the act of a Persuasion. (Usable: once/action)",
      Requirements: [{ type: "Presence", value: 3, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Silver Tongue III
    {
      Title: "Silver Tongue III",
      id: "SilTon3",
      Types: ["Presence"],
      Description:
        "You have +2 in Persuasion checks.\nYou may draw 1 additional card in the act of Persuasion then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Persuasion checks.",
      Requirements: [{ type: "Presence", value: 5, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Intimidation I
    {
      Title: "Intimidation I",
      id: "Intimidation1",
      Types: ["Presence"],
      Description:
        "You have +1 in Intimidation checks. \nTwilights has a value of +1 during Intimidation checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Presence", value: 1, color: "#ebff65" }],
      Cost: "5",
    },
    //PRS Intimidation II
    {
      Title: "Intimidation II",
      id: "Intimidation2",
      Types: ["Presence"],
      Description:
        "You may draw an additional card in the act of a Intimidation. (Usable: once/action)",
      Requirements: [{ type: "Presence", value: 3, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Intimidation III
    {
      Title: "Intimidation III",
      id: "Intimidation3",
      Types: ["Presence"],
      Description:
        "You have +2 in Intimidation checks.\nYou may draw 1 additional card in the act of Intimidation then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Intimidation checks.",
      Requirements: [{ type: "Presence", value: 5, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Leadership I
    {
      Title: "Leadership I",
      id: "Leadership1",
      Types: ["Presence"],
      Description:
        "You have +1 in Leadership checks. \nTwilights has a value of +1 during Leadership checks. \n\nIf you do not have an Twilight card in your deck add one. (The maximum number of Twilights in your deck is 1).",
      Requirements: [{ type: "Presence", value: 1, color: "#ebff65" }],
      Cost: "5",
    },
    //PRS Leadership II
    {
      Title: "Leadership II",
      id: "Leadership2",
      Types: ["Presence"],
      Description:
        "You may draw an additional card in the act of a Leadership. (Usable: once/action)",
      Requirements: [{ type: "Presence", value: 3, color: "#ebff65" }],
      Cost: "10",
    },
    //PRS Leadership III
    {
      Title: "Leadership III",
      id: "Leadership3",
      Types: ["Presence"],
      Description:
        "You have +2 in Intimidation checks.\nYou may draw 1 additional card in the act of Leadership then remove 1 card of your choice.\n\nIn addition to its other effects, Twilights are considered a Critical Success during Intimidation checks.",
      Requirements: [{ type: "Presence", value: 5, color: "#ebff65" }],
      Cost: "10",
    },

    //#endregion PRESENCE

    //#region Multi-Attribute

    //PRS-MND Talk With Animals
    {
      Title: "Talk With Animals",
      id: "TalWitAni",
      Types: ["Presence", "Mind"],
      Description:
        "You are able to understand and communicate with animals of the chosen type. (Aquatic, Mamals, Birds)",
      Requirements: [
        { type: "Presence", value: 1, color: "#ebff65" },
        { type: "Mind", value: 1, color: "#5db8d9" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Soul I
    {
      Title: "Sense: Soul I",
      id: "SenSou1",
      Types: ["Presence", "Mystic"],
      Description:
        "By concentrating you are able to sense if there are any lingering souls in the vicinity of you equal to 10 x Presence in meters.  A 10 minutes ritual enables you to see the souls for up to 5 x Mystic in minutes or for as long as you uphold the ritual but during this effect you are also seen by all souls or spirits.",
      Requirements: [
        { type: "Presence", value: 2, color: "#ebff65" },
        { type: "Mystic", value: 2, color: "#d44ecb" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Soul II
    {
      Title: "Sense: Soul II",
      id: "SenSou2",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects the ritual of Sense: Soul enables you to also communicate with the lingering souls. \nThe range of which you can sense souls is increased to 20 x Presence meters and you are able to sense if the souls are hostile or not at half of that distance",
      Requirements: [
        { type: "Presence", value: 3, color: "#ebff65" },
        { type: "Mystic", value: 3, color: "#d44ecb" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Soul III
    {
      Title: "Sense: Soul III",
      id: "SenSou3",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects the ritual of Sense: Soul enables you to physically interact with lingering souls or spirits and you can also see the souls in the living but not interact with. \nThe duration of the ritual effect is increased to 10 x Mystic in minutes. \nWhile under the effect of Sense: Soul you may at any time choose to become invisible to any spirit or soul.",
      Requirements: [
        { type: "Presence", value: 4, color: "#ebff65" },
        { type: "Mystic", value: 4, color: "#d44ecb" },
      ],
      Cost: "15",
    },
    //PRS-MSC Sense: Divine I
    {
      Title: "Sense: Divine I",
      id: "SenDiv1",
      Types: ["Presence", "Mystic"],
      Description:
        "You are able to sense the presence of a divine entity. You may distinguish Arcane magic from Divine magic.",
      Requirements: [
        { type: "Presence", value: 2, color: "#ebff65" },
        { type: "Mystic", value: 2, color: "#d44ecb" },
      ],
      Cost: "5",
    },
    //PRS-MSC Sense: Divine II
    {
      Title: "Sense: Divine II",
      id: "SenDiv2",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects Sense: Divine now also allows you to distinguish what portfolio the divine presence or magic belongs to. \nBy making a 10 min ritual you are able to hide yourself and an area around you from detection or scrying magic of a divine nature, the area is equal to your Presence x 2 in diameters. The effect of the ritual last for your Mystic x 10 in minutes or for as long as you uphold the ritual.",
      Requirements: [
        { type: "Presence", value: 3, color: "#ebff65" },
        { type: "Mystic", value: 3, color: "#d44ecb" },
      ],
      Cost: "10",
    },
    //PRS-MSC Sense: Divine III
    {
      Title: "Sense: Divine III",
      id: "SenDiv3",
      Types: ["Presence", "Mystic"],
      Description:
        "In addition to its other effects Sense: Divine now lets you distinguish exactly which divine entity of the presence or magic. \nThe effect of the ritual's multiplier is increased to 5 for Mystic and 20 for Presence.",
      Requirements: [
        { type: "Presence", value: 4, color: "#ebff65" },
        { type: "Mystic", value: 4, color: "#d44ecb" },
      ],
      Cost: "15",
    },
    //#endregion Multi-Atrribute

    //#region Basic
    //BSC Weapon Expertise
    {
      Title: "Weapon Expertise",
      id: "WeaExp",
      Types: ["Basic"],
      Description:
        "Choose a Weapon type (for example: One-Handed Sword, Two-Handed Axe, Bow, etc). You are not affected by the penalty of the chosen weapon.",
      Requirements: [{ type: "Basic", value: 3, color: "#9b9b9b" }],
      Cost: "5",
    },
    //BSC Armour Expertise
    {
      Title: "Armour Expertise",
      id: "ArmExp",
      Types: ["Basic"],
      Description:
        "Choose a Armour type (for example: Heavy, Medium, Light). You are not affected by the penalty of the chosen armour. \nYou are able to do minor maintainance and repairs (with the required materials) to the chosen armour.",
      Requirements: [{ type: "Basic", value: 3, color: "#9b9b9b" }],
      Cost: "5",
    },
    //#endregion Basic
  ];
  
  export default TalentList;   