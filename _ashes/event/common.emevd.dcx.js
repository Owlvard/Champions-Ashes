// ==EMEVD==
// @docs    ds3-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    DarkSouls3
// @string    ""
// @linked    []
// @version    3.4.2
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeEvent(0, 200, 0);
    InitializeEvent(0, 230, 0);
    InitializeEvent(0, 9570, 4500, 3740);
    InitializeEvent(1, 9570, 4510, 3750);
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(EventFlag(2052));
    InitializeEvent(0, 130, 40, 4004110, 0, -1);
    InitializeEvent(1, 130, 30, 3004110, 0, -1);
    InitializeEvent(2, 130, 31, 3104110, 0, -1);
    InitializeEvent(3, 130, 33, 3304110, 0, -1);
    InitializeEvent(4, 130, 35, 3504110, 0, -1);
    InitializeEvent(5, 130, 33, 3304111, 0, -1);
    InitializeEvent(6, 130, 38, 3804110, 0, -1);
    InitializeEvent(7, 130, 38, 3804111, 0, -1);
    InitializeEvent(8, 130, 37, 3704110, 0, -1);
    InitializeEvent(9, 130, 37, 3704111, 0, -1);
    InitializeEvent(10, 130, 39, 3904110, 0, -1);
    InitializeEvent(11, 130, 32, 3204110, 0, 26);
    InitializeEvent(12, 130, 30, 3004111, 0, -1);
    InitializeEvent(13, 130, 290, 3414110, 0, -1);
    InitializeEvent(14, 130, 40, 4004111, 10, 25);
    InitializeEvent(15, 130, 41, 4104110, 0, -1);
    InitializeEvent(16, 130, 45, 4504110, 0, -1);
    InitializeEvent(17, 130, 50, 5004110, 0, -1);
    InitializeEvent(18, 130, 51, 5104110, 0, -1);
    InitializeEvent(19, 130, 307, 5114110, 0, -1);
    InitializeEvent(0, 9004, 9007);
    InitializeEvent(0, 9005, 9008);
    InitializeEvent(0, 9006, 9009);
    InitializeEvent(0, 9000, 9001, 9007, 9008, 9009);
    InitializeEvent(0, 9002, 9003);
    InitializeEvent(0, 9010, 0);
    InitializeEvent(0, 970, 13000800, 2000, 0, 0);
    InitializeEvent(1, 970, 13000890, 2010, 0, 0);
    InitializeEvent(2, 970, 13000830, 2020, 0, 0);
    InitializeEvent(28, 970, 13000830, 30607000, 0, 0); //Oceiros scale drop
    InitializeEvent(3, 970, 13010800, 2030, 0, 0);
    InitializeEvent(29, 970, 13100800, 30607000, 0, 0); //DSA scale drop
    InitializeEvent(9, 970, 13410830, 2040, 0, 0);
    InitializeEvent(10, 970, 13410860, 2050, 0, 0);
    InitializeEvent(4, 970, 13100800, 2060, 0, 0);
    InitializeEvent(5, 970, 13200800, 2070, 0, 0);
    InitializeEvent(30, 970, 13200800, 30607000, 0, 0); //Ancient Wyvern scale drop
    InitializeEvent(30, 970, 13200800, 31412001, 0, 0); //Ancient Wyvern tit scale drop
    InitializeEvent(6, 970, 13200850, 2080, 0, 0);
    InitializeEvent(27, 970, 13200850, 30607000, 0, 0); //Nameless King scale drop
    InitializeEvent(7, 970, 13300850, 2090, 0, 0);
    InitializeEvent(8, 970, 13300800, 2100, 0, 0);
    InitializeEvent(11, 970, 13500800, 2110, 0, 0);
    InitializeEvent(12, 970, 13700850, 2120, 0, 0);
    InitializeEvent(13, 970, 13700800, 2130, 0, 0);
    InitializeEvent(14, 970, 13800800, 2140, 0, 0);
    InitializeEvent(15, 970, 13800830, 2150, 0, 0);
    InitializeEvent(17, 970, 13900800, 2170, 0, 0);
    InitializeEvent(18, 970, 14000800, 2180, 0, 0);
    InitializeEvent(19, 970, 14000830, 2190, 0, 0);
    InitializeEvent(20, 970, 14100800, 2200, 0, 0);
    InitializeEvent(21, 970, 14500800, 2300, 0, 0);
    InitializeEvent(22, 970, 14500860, 2310, 0, 0);
    InitializeEvent(23, 970, 15000800, 2330, 0, 0);
    InitializeEvent(24, 970, 15100800, 2340, 0, 0);
    InitializeEvent(25, 970, 15100850, 2350, 0, 0);
    InitializeEvent(31, 970, 15100850, 30607000, 0, 0); //Midir scale drop
    InitializeEvent(26, 970, 15110800, 2360, 0, 0);
    InitializeEvent(10, 250, 17, 6700, 0);
    InitializeEvent(11, 250, 18, 6770, 0);
    InitializeEvent(12, 250, 19, 6740, 0);
    InitializeEvent(13, 250, 20, 6750, 0);
    InitializeEvent(14, 250, 21, 6760, 0);
    InitializeEvent(15, 250, 22, 6710, 0);
    InitializeEvent(16, 250, 23, 6720, 0);
    InitializeEvent(17, 250, 24, 6730, 0);
    InitializeEvent(20, 250, 4, 13300800, 0);
    InitializeEvent(21, 250, 5, 13900800, 0);
    InitializeEvent(22, 250, 6, 13700800, 0);
    InitializeEvent(23, 250, 7, 13410830, 0);
    InitializeEvent(24, 250, 27, 14000800, 0);
    InitializeEvent(25, 250, 28, 13000800, 0);
    InitializeEvent(26, 250, 29, 13100800, 0);
    InitializeEvent(27, 250, 30, 13300850, 0);
    InitializeEvent(28, 250, 31, 13500800, 0);
    InitializeEvent(29, 250, 32, 13800800, 0);
    InitializeEvent(30, 250, 33, 13700850, 0);
    InitializeEvent(31, 250, 34, 13000890, 0);
    InitializeEvent(32, 250, 35, 13010800, 0);
    InitializeEvent(33, 250, 36, 13800830, 0);
    InitializeEvent(34, 250, 37, 13000830, 0);
    InitializeEvent(35, 250, 38, 14000830, 0);
    InitializeEvent(36, 250, 39, 13200800, 0);
    InitializeEvent(37, 250, 40, 13200850, 0);
    InitializeEvent(0, 6099, 0);
    InitializeEvent(0, 6100, 6100, 13300800);
    InitializeEvent(1, 6100, 6101, 13900800);
    InitializeEvent(2, 6100, 6102, 13700800);
    InitializeEvent(3, 6100, 6103, 13410830);
    InitializeEvent(4, 6100, 6104, 14000800);
    InitializeEvent(5, 6100, 6105, 13000800);
    InitializeEvent(6, 6100, 6106, 13300850);
    InitializeEvent(7, 6100, 6107, 13500800);
    InitializeEvent(8, 6100, 6108, 13800800);
    InitializeEvent(9, 6100, 6109, 13700850);
    InitializeEvent(10, 6100, 6110, 13000890);
    InitializeEvent(11, 6100, 6111, 13010800);
    InitializeEvent(12, 6100, 6112, 110);
    InitializeEvent(0, 702, 0);
    InitializeEvent(0, 710, 0);
    InitializeEvent(0, 9510, 0);
    InitializeEvent(0, 9511, 0);
    InitializeEvent(0, 9512, 0);
    InitializeEvent(0, 9520, 4410, 8, 9013, 6058);
    InitializeEvent(0, 9525, 4430, 4, 9005, 6054);
    InitializeEvent(0, 9530, 4420, 18, 9020, 6068);
    InitializeEvent(0, 9540, 15, 9017, 6065);
    InitializeEvent(0, 9100, 70000007);
    InitializeEvent(0, 9101, 70000008);
    InitializeEvent(0, 9102, 70000012);
    InitializeEvent(0, 9103, 70000013);
    InitializeEvent(0, 9104, 70000017);
    InitializeEvent(0, 9105, 70000019, 70000020, 70000021);
    InitializeEvent(0, 9111, 70000022, 70000023);
    InitializeEvent(0, 9106, 70000000);
    InitializeEvent(0, 9107, 70000001);
    InitializeEvent(0, 9108, 70000002);
    InitializeEvent(0, 9109, 70000003);
    InitializeEvent(0, 9110, 70000004);
    InitializeEvent(0, 9112, 70000005);
    InitializeEvent(0, 9113, 70000030);
    InitializeEvent(0, 9114, 70000031);
    InitializeEvent(0, 9120, 74000756, 74000760, 74000760, 1, 1, 1, 0);
    InitializeEvent(1, 9120, 74000591, 74000552, 74000592, 3, 3, 3, 0);
    InitializeEvent(2, 9120, 74000552, 74000553, 74000592, 3, 3, 6, 0);
    InitializeEvent(3, 9120, 74000303, 74000316, 74000316, 1, 1, 1, 1);
    InitializeEvent(4, 9120, 74000306, 74000318, 74000318, 1, 1, 1, 1);
    InitializeEvent(5, 9120, 74000921, 74000925, 74000925, 1, 1, 1, 1);
    InitializeEvent(6, 9120, 74000916, 74000913, 74000913, 1, 1, 1, 1);
    InitializeEvent(7, 9120, 73500265, 73500264, 73500264, 1, 1, 1, 0);
    InitializeEvent(0, 9016, 0);
    InitializeEvent(0, 9011, 74000132);
    InitializeEvent(0, 9014, 0);
    InitializeEvent(0, 9018, 0);
    InitializeEvent(0, 9019, 74000669);
    InitializeEvent(0, 9015, 0);
    InitializeEvent(0, 9030, 0);
    InitializeEvent(0, 6900, 0);
    InitializeEvent(0, 9020, 73500300, 1621, 1634, 6951, 35);
    InitializeEvent(1, 9020, 14100511, 14100512, 14100512, 6952, 41);
    InitializeEvent(2, 9020, 14500161, 14500162, 14500162, 6952, 45);
    InitializeEvent(0, 90000000, 0);
    InitializeEvent(0, 234, 0);
    InitializeEvent(0, 234, 0);
    InitializeEvent(0, 236, 0);
    InitializeEvent(0, 90009, 0);
});

$Event(50, Default, function() {
    InitializeEvent(0, 231, 0);
    InitializeEvent(0, 232, 0);
    InitializeEvent(0, 701, 0);
    InitializeEvent(0, 700, 0);
    InitializeEvent(0, 9012, 0);
    InitializeEvent(0, 741, 0);
    InitializeEvent(0, 740, 0);
    InitializeEvent(0, 9080, 2, 10040, 6700);
    InitializeEvent(1, 9080, 2, 10050, 6710);
    InitializeEvent(2, 9080, 2, 10020, 6720);
    InitializeEvent(3, 9080, 2, 10030, 6730);
    InitializeEvent(4, 9080, 2, 10070, 6740);
    InitializeEvent(5, 9080, 2, 10000, 6750);
    InitializeEvent(6, 9080, 2, 10080, 6760);
    InitializeEvent(7, 9080, 2, 10060, 6770);
    InitializeEvent(10, 9080, 3, 520, 6790);
    InitializeEvent(11, 9080, 3, 521, 6791);
    InitializeEvent(12, 9080, 3, 522, 6792);
    InitializeEvent(13, 9080, 3, 523, 6793);
    InitializeEvent(14, 9080, 3, 524, 6794);
    InitializeEvent(15, 9080, 3, 102, 6780);
    InitializeEvent(16, 9080, 3, 101, 6781);
    InitializeEvent(17, 9080, 3, 108, 6782);
    InitializeEvent(18, 9080, 2, 10090, 6830);
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(2052));
    if (EventFlag(6400) && !EventFlag(14000100)) {
        RemoveItemFromPlayer(ItemType.Goods, 115, 1);
        RemoveItemFromPlayer(ItemType.Goods, 384, 1);
        RemoveItemFromPlayer(ItemType.Goods, 386, 1);
        RemoveItemFromPlayer(ItemType.Goods, 390, 1);
        RemoveItemFromPlayer(ItemType.Goods, 490, 8);
        RemoveItemFromPlayer(ItemType.Goods, 2001, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2005, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2007, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2008, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2009, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2010, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2011, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2012, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2013, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2014, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2015, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2102, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2103, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2104, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2105, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2106, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2107, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2108, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2109, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2110, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2111, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2112, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2113, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2114, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2115, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2116, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2117, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2119, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2120, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2121, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2123, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2124, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2125, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2126, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2127, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2128, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2129, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2130, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2131, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2132, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2133, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2134, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2135, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2137, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2138, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2139, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2140, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2142, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2144, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2145, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2146, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2147, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2148, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2149, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2150, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2151, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2152, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2154, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2155, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2156, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2157, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2158, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2160, 1);
        RemoveItemFromPlayer(ItemType.Goods, 2161, 1);
        RemoveItemFromPlayer(ItemType.Goods, 20860, 1);
        SetEventFlag(6400, OFF);
    }
L0:
    NoOp();
});

$Event(130, Default, function(X0_1, X1_1, X4_4, X8_2, X12_4) {
    EndIf(ThisEventSlot());
    mapHit &= PlayerInMap(X0_1, X1_1) && PlayerStandingOnHit(X4_4);
    if (PlayerInMap(40, 0)) {
        mapHit &= MapCeremony(X0_1, X1_1, X8_2);
    }
    WaitFor(mapHit);
    EndIf(X12_4 == -1);
    AwardAchievement(X12_4);
    EndEvent();
});

$Event(200, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!PlayerIsNotInOwnWorld());
    SetEventFlag(201, ON);
});

$Event(230, Restart, function() {
    EndIf(EventFlag(230));
    WaitFor(EventFlag(9314) && EventFlag(9318));
    SetMapCeremony(30, 0, 10);
    SetMapCeremony(30, 1, 10);
    SetMapCeremony(34, 1, 10);
    SetMapCeremony(31, 0, 10);
    SetMapCeremony(33, 0, 10);
    SetMapCeremony(35, 0, 10);
    SetEventFlag(230, ON);
});

$Event(231, Restart, function() {
    EndIf(PlayerInMap(40, 0));
    SetMapCeremony(40, 0, 10);
    EndEvent();
});

$Event(232, Default, function() {
    if (!EventFlag(8221)) {
        if (!EventFlag(230)) {
            SetMapCeremony(31, 0, 0);
        } else {
L0:
            SetMapCeremony(31, 0, 10);
            Goto(L1);
        }
    }
L1:
    WaitFor(PlayerInMap(30, 0) || PlayerInMap(30, 1) || PlayerInMap(34, 1) || PlayerInMap(40, 0));
    WaitFixedTimeFrames(1);
    if (!EventFlag(230)) {
        SetMapCeremony(31, 0, 20);
    } else {
L2:
        SetMapCeremony(31, 0, 30);
        Goto(L3);
    }
L3:
    WaitFor(
        !PlayerInMap(30, 0) && !PlayerInMap(30, 1) && !PlayerInMap(34, 1) && !PlayerInMap(40, 0));
    RestartEvent();
});

$Event(250, Default, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X4_4) && !PlayerIsNotInOwnWorld());
    WaitFixedTimeSeconds(X8_4);
    AwardAchievement(X0_4);
});

$Event(6100, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(EventFlag(X4_4) && !PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, ON);
});

$Event(700, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(2052));
    EndIf(ThisEventSlot());
    SetEventFlag(50006020, ON);
    SetEventFlag(9215, ON);
    SetCharacterRemainingYoelLevels(5);
    SetEventFlag(70000125, ON);
    SetEventFlag(70000128, ON);
    SetEventFlag(70000129, ON);
    if (PlayersClass(ClassType.Pyromancer)) {
        SetEventFlag(74000465, ON);
    }
    SetEventFlag(50006162, ON);
    SetEventFlag(50006163, ON);
    SetEventFlag(73501010, ON);
    SetEventFlag(73501020, ON);
    SetEventFlag(73501030, ON);
    SetEventFlag(73501040, ON);
    SetEventFlag(73501050, ON);
    if (GameCycle() >= 1) {
        SetEventFlag(70000900, ON);
    }
    if (GameCycle() >= 6) {
        SetEventFlag(56, ON);
        EndEvent();
    }
    if (GameCycle() == 5) {
        SetEventFlag(55, ON);
        EndEvent();
    }
    if (GameCycle() == 4) {
        SetEventFlag(54, ON);
        EndEvent();
    }
    if (GameCycle() == 3) {
        SetEventFlag(53, ON);
        EndEvent();
    }
    if (GameCycle() == 2) {
        SetEventFlag(52, ON);
        EndEvent();
    }
    if (GameCycle() == 1) {
        SetEventFlag(51, ON);
        EndEvent();
    }
    SetEventFlag(50, ON);
    EndEvent();
});

$Event(701, Default, function() {
    SetEventFlag(6000, OFF);
    SetEventFlag(6001, ON);
});

$Event(702, Default, function() {
    EndIf(EventFlag(6600));
    WaitFor(EventFlag(6600));
    SetEventFlag(703, ON);
});

$Event(710, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEventSlot());
    EndIf(PlayerHasItem(ItemType.Goods, 2014));
    WaitFor(
        !PlayerIsNotInOwnWorld()
            && EventFlag(9314)
            && EventFlag(9318)
            && (InArea(10000, 3702890) || InArea(10000, 3902890)));
    SetSpEffect(10000, 4900);
    SetSpEffect(10000, 4901);
    GotoIf(L0, PlayerInMap(37, 0));
    GotoIf(L1, PlayerInMap(39, 0));
    Goto(L2);
L0:
    WaitFixedTimeSeconds(3);
    SetEventFlag(13700002, ON);
    if (!(EventFlag(13000896) && !EventFlag(13000890))) {
        PlayCutsceneAndWarpPlayerUnknown200212(37000030, CutscenePlayMode.Skippable, 3002100, 30, 0, 10000, 3002890);
    } else {
        PlayCutsceneAndWarpPlayerUnknown200212(37000030, CutscenePlayMode.Skippable, 3002890, 30, 0, 10000, 3002890);
    }
    Goto(L2);
L1:
    if (AnyBatchEventFlags(1388, 1389)) {
        area = !InArea(10000, 3902890);
        WaitFor(EventFlag(73900164) || EventFlag(1398) || area);
        GotoIf(L20, area.Passed);
    }
L19:
    WaitFixedTimeSeconds(3);
L20:
    SetEventFlag(13900001, ON);
    if (!(EventFlag(13000896) && !EventFlag(13000890))) {
        PlayCutsceneAndWarpPlayerUnknown200212(39000030, CutscenePlayMode.Skippable, 3002100, 30, 0, 10000, 3002890);
    } else {
        PlayCutsceneAndWarpPlayerUnknown200212(39000030, CutscenePlayMode.Skippable, 3002890, 30, 0, 10000, 3002890);
    }
    Goto(L2);
L2:
    SetEventFlag(711, ON);
    WaitFixedTimeFrames(0);
    ClearSpEffect(10000, 4900);
    ClearSpEffect(10000, 4901);
    EndEvent();
});

$Event(730, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(!PlayerIsNotInOwnWorld() && CharacterHasSpEffect(10000, 100));
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    ClearSpEffect(10000, 11907);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(740, Default, function() {
    SetNetworkSyncState(Disabled);
    ChangeCamera(-1, -1);
});

$Event(741, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(2052));
    SetEventFlag(74000013, OFF);
    WaitFor(!(PlayerInMap(40, 0) && MapCeremony(40, 0, 10)));
    SetEventFlag(743, ON);
    WaitFor(PlayerInMap(40, 0) && MapCeremony(40, 0, 10) && !PlayerStandingOnHit(4004120));
    RestartEvent();
});

$Event(750, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(PlayerIsNotInOwnWorld());
    RemoveItemFromPlayer(ItemType.Goods, 10110, 99);
    RemoveItemFromPlayer(ItemType.Goods, 10120, 99);
    RemoveItemFromPlayer(ItemType.Goods, 10200, 99);
    RemoveItemFromPlayer(ItemType.Goods, 10210, 99);
    RemoveItemFromPlayer(ItemType.Goods, 10220, 99);
    RemoveItemFromPlayer(ItemType.Goods, 10230, 99);
});

$Event(970, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X0_4));
    if (X4_4 != 0) {
        AwardItemsIncludingClients(X4_4);
    }
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(5);
    if (X8_4 != 0) {
        AwardItemsIncludingClients(X8_4);
    }
    if (X12_4 != 0) {
        AwardItemsIncludingClients(X12_4);
    }
});

$Event(6099, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEventSlot());
    WaitFor(
        EventFlag(6050)
            && EventFlag(6051)
            && EventFlag(6054)
            && EventFlag(6056)
            && EventFlag(6057)
            && EventFlag(6058)
            && EventFlag(6059)
            && EventFlag(6062)
            && EventFlag(6065)
            && EventFlag(6066)
            && EventFlag(6067)
            && EventFlag(6068)
            && EventFlag(6069)
            && EventFlag(6072)
            && EventFlag(6073)
            && EventFlag(6074)
            && EventFlag(6075)
            && EventFlag(6076)
            && EventFlag(6077)
            && EventFlag(6078)
            && EventFlag(6079)
            && EventFlag(6080)
            && EventFlag(6081)
            && EventFlag(6082)
            && EventFlag(6083)
            && EventFlag(6084));
    AwardAchievement(14);
    SetEventFlag(6099, ON);
});

$Event(6900, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(ThisEventSlot());
    EndIf(!PlayerHasItem(ItemType.Goods, 170) && !PlayerHasItem(ItemType.Goods, 171));
    SetEventFlag(6030, ON);
});

$Event(9510, Default, function() {
    EndIf(ThisEventSlot());
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(13500193) && EventFlag(8240));
    SetEventFlag(9510, ON);
});

$Event(9511, Default, function() {
    EndIf(ThisEventSlot());
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(13500194));
    SetEventFlag(9511, ON);
});

$Event(9512, Default, function() {
    EndIf(ThisEventSlot());
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(13700194) && EventFlag(13300184));
    SetEventFlag(9512, ON);
});

$Event(9520, Restart, function(X0_4, X4_2, X8_4, X12_4) {
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(13304194));
    RequestCharacterAICommand(3300194, 99, 2);
    RequestCharacterAIReplan(3300194);
    WaitFor(CharacterHasSpEffect(3300194, X0_4));
    RequestCharacterAICommand(3300194, -1, 2);
    RequestCharacterAIReplan(3300194);
    EndIf(EventFlag(X12_4));
    AwardGestureItem(X4_2, ItemType.Goods, X8_4);
    SetEventFlag(X12_4, ON);
});

$Event(9525, Restart, function(X0_4, X4_2, X8_4, X12_4) {
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(13304195) || EventFlag(13704192) || EventFlag(14104190));
    if (EventFlag(13304195)) {
        RequestCharacterAICommand(3300195, 99, 2);
        RequestCharacterAIReplan(3300195);
    }
    if (EventFlag(13704192)) {
        RequestCharacterAICommand(3700192, 99, 2);
        RequestCharacterAIReplan(3700192);
    }
    if (EventFlag(14104190)) {
        RequestCharacterAICommand(4100190, 99, 2);
        RequestCharacterAIReplan(4100190);
    }
    WaitFor(
        CharacterHasSpEffect(3300195, X0_4)
            || CharacterHasSpEffect(3700192, X0_4)
            || CharacterHasSpEffect(4100191, X0_4));
    if (EventFlag(13304195)) {
        RequestCharacterAICommand(3300195, -1, 2);
        RequestCharacterAIReplan(3300195);
    }
    if (EventFlag(13704192)) {
        RequestCharacterAICommand(3700192, -1, 2);
        RequestCharacterAIReplan(3700192);
    }
    if (EventFlag(14104191)) {
        RequestCharacterAICommand(4100190, -1, 2);
        RequestCharacterAIReplan(4100190);
    }
    EndIf(EventFlag(X12_4));
    AwardGestureItem(X4_2, ItemType.Goods, X8_4);
    SetEventFlag(X12_4, ON);
});

$Event(9530, Restart, function(X0_4, X4_2, X8_4, X12_4) {
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(13304913) || EventFlag(13704191));
    if (EventFlag(13304913)) {
        RequestCharacterAICommand(3300193, 99, 2);
        RequestCharacterAIReplan(3300193);
    }
    if (EventFlag(13704191)) {
        RequestCharacterAICommand(3700191, 99, 2);
        RequestCharacterAIReplan(3700191);
    }
    WaitFor(CharacterHasSpEffect(3300193, X0_4) || CharacterHasSpEffect(3700191, X0_4));
    if (EventFlag(13304913)) {
        RequestCharacterAICommand(3300193, -1, 2);
        RequestCharacterAIReplan(3300193);
    }
    if (EventFlag(13704191)) {
        RequestCharacterAICommand(3700191, -1, 2);
        RequestCharacterAIReplan(3700191);
    }
    EndIf(EventFlag(X12_4));
    AwardGestureItem(X4_2, ItemType.Goods, X8_4);
    SetEventFlag(X12_4, ON);
});

$Event(9540, Restart, function(X0_2, X4_4, X8_4) {
    EndIf(PlayerIsNotInOwnWorld());
    flagArea = EventFlag(13804196) && !EventFlag(13805196) && EntityInRadiusOfEntity(10000, 3800196, 20, 1);
    chrArea = CharacterAIState(3800198, AIStateType.Combat) && EntityInRadiusOfEntity(10000, 3800198, 20, 1);
    onlineHp = !PlayerIsNotInOwnWorld() && HPRatio(10000) <= 0;
    flagAreaChr = flagArea || chrArea;
    WaitFor(flagAreaChr && onlineHp);
    if (flagArea.Passed) {
        RequestCharacterAICommand(3800196, 99, 2);
        RequestCharacterAIReplan(3800196);
    }
    if (chrArea.Passed) {
        RequestCharacterAICommand(3800198, 99, 2);
        RequestCharacterAIReplan(3800198);
    }
    WaitFixedTimeSeconds(1);
    if (flagArea.Passed) {
        RequestCharacterAICommand(3800196, -1, 2);
        RequestCharacterAIReplan(3800196);
    }
    if (chrArea.Passed) {
        RequestCharacterAICommand(3800198, -1, 2);
        RequestCharacterAIReplan(3800198);
    }
    EndIf(EventFlag(X8_4));
    AwardGestureItem(X0_2, ItemType.Goods, X4_4);
    SetEventFlag(X8_4, ON);
});

$Event(9570, Restart, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterHasSpEffect(10000, X4_4));
    AwardItemsIncludingClients(X0_4);
    WaitFixedTimeSeconds(1.5);
    RestartEvent();
});

$Event(9000, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4) || EventFlag(X12_4));
    SetEventFlag(X0_4, ON);
    WaitFor(!(EventFlag(X4_4) || EventFlag(X8_4) || EventFlag(X12_4)));
    RestartEvent();
});

$Event(9002, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    SetEventFlag(70000050, ON);
    SetEventFlag(70000051, ON);
    SetEventFlag(70000052, ON);
    SetEventFlag(70000053, ON);
    SetEventFlag(70000054, ON);
    SetEventFlag(70000055, ON);
    SetEventFlag(70000056, ON);
    SetEventFlag(70000057, ON);
    SetEventFlag(70000058, ON);
    SetEventFlag(70000059, ON);
    SetEventFlag(70000060, ON);
    SetEventFlag(70000061, ON);
    SetEventFlag(70000062, ON);
    SetEventFlag(70000063, ON);
    SetEventFlag(70000064, ON);
    SetEventFlag(70000065, ON);
    SetEventFlag(70000066, ON);
    SetEventFlag(70000067, ON);
    SetEventFlag(70000068, ON);
    SetEventFlag(70000069, ON);
    SetEventFlag(70000070, ON);
    SetEventFlag(70000071, ON);
    SetEventFlag(70000072, ON);
    SetEventFlag(70000073, ON);
    SetEventFlag(70000074, ON);
    SetEventFlag(70000075, ON);
    SetEventFlag(70000076, ON);
    SetEventFlag(70000077, ON);
    SetEventFlag(70000078, ON);
    SetEventFlag(70000079, ON);
    SetEventFlag(70000080, ON);
    SetEventFlag(70000081, ON);
    SetEventFlag(70000082, ON);
    SetEventFlag(70000083, ON);
    SetEventFlag(70000084, ON);
    SetEventFlag(70000085, ON);
    SetEventFlag(70000086, ON);
    SetEventFlag(70000087, ON);
    SetEventFlag(70000088, ON);
    SetEventFlag(70000089, ON);
    SetEventFlag(70000090, ON);
    SetEventFlag(70000091, ON);
    SetEventFlag(70000092, ON);
    SetEventFlag(70000093, ON);
    SetEventFlag(70000094, ON);
    SetEventFlag(70000095, ON);
    SetEventFlag(70000096, ON);
    SetEventFlag(70000097, ON);
    SetEventFlag(70000098, ON);
    SetEventFlag(70000099, ON);
    SetEventFlag(70001073, ON);
    RestartEvent();
});

$Event(9004, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(
        (EventFlag(1016) && !EventFlag(70000052))
            || (EventFlag(1036) && !EventFlag(70000053))
            || (EventFlag(1056) && !EventFlag(70000054))
            || (EventFlag(1076) && !EventFlag(70000055))
            || (EventFlag(1096) && !EventFlag(70000056))
            || (EventFlag(1116) && !EventFlag(70000057))
            || (EventFlag(1136) && !EventFlag(70000058))
            || (EventFlag(1156) && !EventFlag(70000059))
            || (EventFlag(1176) && !EventFlag(70000060))
            || (EventFlag(1196) && !EventFlag(70000061))
            || (EventFlag(1216) && !EventFlag(70000062))
            || (EventFlag(1236) && !EventFlag(70000063))
            || (EventFlag(1256) && !EventFlag(70000064))
            || (EventFlag(1276) && !EventFlag(70000065))
            || (EventFlag(1296) && !EventFlag(70000066)));
    ClearCompiledConditionGroupState(0);
    SetEventFlag(X0_4, ON);
    WaitFor(
        !((EventFlag(1016) && !EventFlag(70000052))
            || (EventFlag(1036) && !EventFlag(70000053))
            || (EventFlag(1056) && !EventFlag(70000054))
            || (EventFlag(1076) && !EventFlag(70000055))
            || (EventFlag(1096) && !EventFlag(70000056))
            || (EventFlag(1116) && !EventFlag(70000057))
            || (EventFlag(1136) && !EventFlag(70000058))
            || (EventFlag(1156) && !EventFlag(70000059))
            || (EventFlag(1176) && !EventFlag(70000060))
            || (EventFlag(1196) && !EventFlag(70000061))
            || (EventFlag(1216) && !EventFlag(70000062))
            || (EventFlag(1236) && !EventFlag(70000063))
            || (EventFlag(1256) && !EventFlag(70000064))
            || (EventFlag(1276) && !EventFlag(70000065))
            || (EventFlag(1296) && !EventFlag(70000066))));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

$Event(9005, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(
        (EventFlag(1316) && !EventFlag(70000067))
            || (EventFlag(1336) && !EventFlag(70000068))
            || (EventFlag(1356) && !EventFlag(70000069))
            || (EventFlag(1376) && !EventFlag(70000070))
            || (EventFlag(1396) && !EventFlag(70000071))
            || (EventFlag(1416) && !EventFlag(70000072))
            || (EventFlag(1436) && !EventFlag(70000073))
            || (EventFlag(1456) && !EventFlag(70000074))
            || (EventFlag(1476) && !EventFlag(70000075))
            || (EventFlag(1496) && !EventFlag(70000076))
            || (EventFlag(1516) && !EventFlag(70000077))
            || (EventFlag(1536) && !EventFlag(70000078))
            || (EventFlag(1556) && !EventFlag(70000079))
            || (EventFlag(1576) && !EventFlag(70000080))
            || (EventFlag(1596) && !EventFlag(70000081)));
    SetEventFlag(X0_4, ON);
    ClearCompiledConditionGroupState(0);
    WaitFor(
        !((EventFlag(1316) && !EventFlag(70000067))
            || (EventFlag(1336) && !EventFlag(70000068))
            || (EventFlag(1356) && !EventFlag(70000069))
            || (EventFlag(1376) && !EventFlag(70000070))
            || (EventFlag(1396) && !EventFlag(70000071))
            || (EventFlag(1416) && !EventFlag(70000072))
            || (EventFlag(1436) && !EventFlag(70000073))
            || (EventFlag(1456) && !EventFlag(70000074))
            || (EventFlag(1476) && !EventFlag(70000075))
            || (EventFlag(1496) && !EventFlag(70000076))
            || (EventFlag(1516) && !EventFlag(70000077))
            || (EventFlag(1536) && !EventFlag(70000078))
            || (EventFlag(1556) && !EventFlag(70000079))
            || (EventFlag(1576) && !EventFlag(70000080))
            || (EventFlag(1596) && !EventFlag(70000081))));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

$Event(9006, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(1816) && !EventFlag(70001073));
    SetEventFlag(X0_4, ON);
    ClearCompiledConditionGroupState(0);
    WaitFor(!(EventFlag(1816) && !EventFlag(70001073)));
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

$Event(9010, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(70000061));
    if (EventFlag(74000295)) {
        SetEventFlag(74000295, OFF);
    } else if (EventFlag(74000294)) {
        SetEventFlag(74000294, OFF);
    } else if (EventFlag(74000293)) {
        SetEventFlag(74000293, OFF);
    } else if (EventFlag(74000292)) {
        SetEventFlag(74000292, OFF);
    } else if (EventFlag(74000291)) {
        SetEventFlag(74000291, OFF);
    } else if (EventFlag(74000290)) {
        SetEventFlag(74000290, OFF);
        BatchSetNetworkconnectedEventFlags(1195, 1199, OFF);
        SetNetworkconnectedEventFlag(1195, ON);
        Goto(L20);
    }
L20:
    SetEventFlag(70000061, OFF);
    RestartEvent();
});

$Event(9011, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EventFlag(700) && !EventFlag(50006020));
    if (!EventFlag(14000110)) {
        if (!(EventFlag(9307) && EventFlag(9309) && EventFlag(9314) && EventFlag(9318))) {
            if (!EventFlag(9307)) {
                flag |= EventFlag(9307);
            }
            if (!EventFlag(9309)) {
                flag |= EventFlag(9309);
            }
            if (!EventFlag(9314)) {
                flag |= EventFlag(9314);
            }
            if (!EventFlag(9318)) {
                flag |= EventFlag(9318);
            }
        } else {
L0:
            flag |= EventFlag(14000110);
            Goto(L1);
        }
    }
L1:
    flag2 = EventFlag(50006020);
    flag |= flag2;
    WaitFor(flag);
    if (flag2.Passed) {
        SetEventFlag(X0_4, OFF);
        RestartEvent();
    }
    SetEventFlag(X0_4, ON);
    RestartEvent();
});

$Event(9012, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(2052));
    WaitFor(PlayerGender(Gender.Male));
    SetNetworkconnectedEventFlag(9013, ON);
    WaitFor(PlayerGender(Gender.Female));
    SetNetworkconnectedEventFlag(9013, OFF);
    RestartEvent();
});

$Event(9014, Restart, function() {
    EndIf(PlayerIsNotInOwnWorld());
    if (!EventFlag(9014)) {
        if (EventFlag(13300761)) {
            DisplayGenericDialog(13007000, PromptType.OKCANCEL, NumberofOptions.OneButton, 10000, 0);
            EndEvent();
        }
    }
L0:
    WaitFor(EventFlag(9014));
    SetEventFlag(9014, ON);
});

$Event(9015, Default, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(70000118));
    WaitFor((EventFlag(1124) || EventFlag(1126)) && EventFlag(9303) && EventFlag(9314));
    SetEventFlag(70000118, ON);
});

$Event(9016, Restart, function() {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(9017, OFF);
    WaitFor(PlayersClass(ClassType.Cleric));
    SetEventFlag(9017, ON);
    WaitFor(!PlayersClass(ClassType.Cleric));
    RestartEvent();
});

$Event(9018, Restart, function() {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(73300202));
    WaitFor(EventFlag(13204190) || EventFlag(13005710));
    SetEventFlag(73300202, ON);
});

$Event(9019, Restart, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(13304192) || EventFlag(13014192));
    SetEventFlag(X0_4, ON);
});

$Event(9020, Default, function(X0_4, X4_4, X8_4, X12_4, X16_1, X17_1) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(AnyBatchEventFlags(X4_4, X8_4));
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(X12_4) && (!PlayerInMap(X16_1, X17_1) || EventFlag(74000013)));
    SetEventFlag(X0_4, ON);
    WaitFor(!(EventFlag(X12_4) && (!PlayerInMap(X16_1, X17_1) || EventFlag(74000013))));
    RestartEvent();
});

$Event(9080, Default, function(X0_1, X4_4, X8_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(2052));
    EndIf(ThisEventSlot());
    EndIf(PlayerHasItemIncludingBBox(X0_1, X4_4));
    SetEventFlag(X8_4, OFF);
});

$Event(9100, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(1103));
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(1103));
    RestartEvent();
});

$Event(9101, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(PlayerInMap(34, 1) || PlayerInMap(30, 1) || PlayerInMap(33, 0) || PlayerInMap(35, 0));
    GotoIf(L0, PlayerInMap(34, 1));
    GotoIf(L1, PlayerInMap(30, 1));
    GotoIf(L2, PlayerInMap(33, 0));
    GotoIf(L3, PlayerInMap(35, 0));
L0:
    if (EventFlag(1128) && !EventFlag(73500150)) {
        SetEventFlag(X0_4, ON);
    }
    WaitFor(!PlayerInMap(34, 1));
    RestartEvent();
L1:
    if (EventFlag(1128) && !EventFlag(73500150)) {
        SetEventFlag(X0_4, ON);
    }
    WaitFor(!PlayerInMap(30, 1));
    RestartEvent();
L2:
    if ((EventFlag(1124) || EventFlag(1126) || EventFlag(1128)) && !EventFlag(73500150)) {
        SetEventFlag(X0_4, ON);
    }
    WaitFor(!PlayerInMap(33, 0));
    RestartEvent();
L3:
    if ((EventFlag(1124) || EventFlag(1126) || EventFlag(1128)) && !EventFlag(73500150)) {
        SetEventFlag(X0_4, ON);
    }
    WaitFor(!PlayerInMap(35, 0));
    RestartEvent();
});

$Event(9102, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(PlayerInMap(31, 0) || PlayerInMap(37, 0));
    GotoIf(L0, PlayerInMap(31, 0));
    GotoIf(L1, PlayerInMap(37, 0));
L0:
    if (EventFlag(1202)) {
        SetEventFlag(X0_4, ON);
    }
    WaitFor(!PlayerInMap(31, 0));
    RestartEvent();
L1:
    if (EventFlag(1204)) {
        SetEventFlag(X0_4, ON);
    }
    WaitFor(!PlayerInMap(37, 0));
    RestartEvent();
});

$Event(9103, Default, function(X0_4) {
    RestartIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(1223));
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(1223));
    RestartEvent();
});

$Event(9104, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(
        (EventFlag(1301) || EventFlag(1303))
            && EventFlag(1295)
            && !EventFlag(73101710)
            && !EventFlag(73101720)
            && !EventFlag(73101730)
            && !EventFlag(73101740)
            && !EventFlag(73101750));
    SetEventFlag(X0_4, ON);
    WaitFor(
        !((EventFlag(1301) || EventFlag(1303))
            && EventFlag(1295)
            && !EventFlag(73101710)
            && !EventFlag(73101720)
            && !EventFlag(73101730)
            && !EventFlag(73101740)
            && !EventFlag(73101750)));
    RestartEvent();
});

$Event(9105, Default, function(X0_4, X4_4, X8_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    SetEventFlag(X8_4, OFF);
    WaitFor(EventFlag(1341) && !EventFlag(9311));
    if (EventFlag(9013)) {
        SetEventFlag(X0_4, ON);
    } else {
L10:
        SetEventFlag(X4_4, ON);
        Goto(L20);
    }
L20:
    SetEventFlag(X8_4, ON);
    WaitFor(!(EventFlag(1341) && !EventFlag(9311)));
    RestartEvent();
});

$Event(9106, Restart, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(1130) && !EventFlag(1138));
    SetEventFlag(X0_4, ON);
    WaitFor(!(EventFlag(1130) && !EventFlag(1138)));
    RestartEvent();
});

$Event(9107, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(1042) && EventFlag(1055));
    SetEventFlag(X0_4, ON);
    WaitFor(!(EventFlag(1042) && EventFlag(1055)));
    RestartEvent();
});

$Event(9108, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(AnyBatchEventFlags(1041, 1042) && EventFlag(1055));
    SetEventFlag(X0_4, ON);
    WaitFor(!(AnyBatchEventFlags(1041, 1042) && EventFlag(1055)));
    RestartEvent();
});

$Event(9109, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(1042) && EventFlag(1055));
    SetEventFlag(X0_4, ON);
    WaitFor(!(EventFlag(1042) && EventFlag(1055)));
    RestartEvent();
});

$Event(9110, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(
        (AnyBatchEventFlags(1041, 1042) && (EventFlag(1058) || EventFlag(1056)))
            || AnyBatchEventFlags(1043, 1044));
    SetEventFlag(X0_4, ON);
    WaitFor(
        !((AnyBatchEventFlags(1041, 1042) && (EventFlag(1058) || EventFlag(1056)))
            || AnyBatchEventFlags(1043, 1044)));
    RestartEvent();
});

$Event(9111, Default, function(X0_4, X4_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    SetEventFlag(X4_4, OFF);
    WaitFor(EventFlag(1347) && EventFlag(1355) && EventFlag(13700651));
    if (EventFlag(9013)) {
        SetEventFlag(X0_4, ON);
    } else {
L10:
        SetEventFlag(X4_4, ON);
        Goto(L20);
    }
L20:
    WaitFor(!(EventFlag(1347) && EventFlag(1355) && EventFlag(13700651)));
    RestartEvent();
});

$Event(9112, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(8200));
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(8200));
    RestartEvent();
});

$Event(9113, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(
        (PlayerInMap(50, 0) && AnyBatchEventFlags(1803, 1804))
            || (PlayerInMap(51, 0) && EventFlag(1811))
            || (PlayerInMap(51, 1) && EventFlag(1811)));
    SetEventFlag(X0_4, ON);
    WaitFor(
        !((PlayerInMap(50, 0) && AnyBatchEventFlags(1803, 1804))
            || (PlayerInMap(51, 0) && EventFlag(1811))
            || (PlayerInMap(51, 1) && EventFlag(1811))));
    RestartEvent();
});

$Event(9114, Default, function(X0_4) {
    EndIf(PlayerIsNotInOwnWorld());
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(1821));
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(1821));
    RestartEvent();
});

$Event(9120, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_1, X20_4, X24_4) {
    EndIf(PlayerIsNotInOwnWorld());
    EndIf(EventFlag(X4_4));
    WaitFor(!MapCeremony(40, 0, 0) && EventFlag(X0_4));
    flag |= !EventFlag(X0_4);
    if (!EventFlag(9300)) {
        flag |= EventFlag(9300);
    }
    if (!EventFlag(9301)) {
        flag |= EventFlag(9301);
    }
    if (!EventFlag(9302)) {
        flag |= EventFlag(9302);
    }
    if (!EventFlag(9303)) {
        flag |= EventFlag(9303);
    }
    if (!EventFlag(9304)) {
        flag |= EventFlag(9304);
    }
    if (!EventFlag(9305)) {
        flag |= EventFlag(9305);
    }
    if (!EventFlag(9306)) {
        flag |= EventFlag(9306);
    }
    if (!EventFlag(9307)) {
        flag |= EventFlag(9307);
    }
    if (!EventFlag(9308)) {
        flag |= EventFlag(9308);
    }
    if (!EventFlag(9309)) {
        flag |= EventFlag(9309);
    }
    if (!EventFlag(9311)) {
        flag |= EventFlag(9311);
    }
    if (!EventFlag(9313)) {
        flag |= EventFlag(9313);
    }
    if (!EventFlag(9314)) {
        flag |= EventFlag(9314);
    }
    if (!EventFlag(9315)) {
        flag |= EventFlag(9315);
    }
    if (!EventFlag(9317)) {
        flag |= EventFlag(9317);
    }
    if (!EventFlag(9318)) {
        flag |= EventFlag(9318);
    }
    if (!EventFlag(9319)) {
        flag |= EventFlag(9319);
    }
    if (!EventFlag(9320)) {
        flag |= EventFlag(9320);
    }
    if (!EventFlag(9321)) {
        flag |= EventFlag(9321);
    }
    if (!EventFlag(9322)) {
        flag |= EventFlag(9322);
    }
    if (!EventFlag(9323)) {
        flag |= EventFlag(9323);
    }
    if (!EventFlag(9324)) {
        flag |= EventFlag(9324);
    }
    if (!EventFlag(9325)) {
        flag |= EventFlag(9325);
    }
    if (!EventFlag(9326)) {
        flag |= EventFlag(9326);
    }
    if (!EventFlag(9327)) {
        flag |= EventFlag(9327);
    }
    if (X24_4 == 1) {
        flag2 &= AllBatchEventFlags(9300, 9309)
            && EventFlag(9311)
            && AllBatchEventFlags(9313, 9315)
            && AllBatchEventFlags(9317, 9321);
        if (EventFlag(6951)) {
            flag2 &= AllBatchEventFlags(9322, 9323);
        }
        if (EventFlag(6952)) {
            flag2 &= AllBatchEventFlags(9324, 9327);
        }
        flag |= flag2;
    }
L0:
    WaitFor(flag);
    RestartIf(!EventFlag(X0_4));
    IncrementEventValue(X8_4, X12_4, X20_4);
    RestartIf(EventValue(X8_4, X16_1) != X20_4);
    SetEventFlag(X4_4, ON);
});

$Event(690, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X12_4));
    }
    if (!EventFlag(2)) {
        flag |= EventFlag(2);
    }
    if (!EventFlag(3)) {
        flag |= EventFlag(3);
    }
    if (!EventFlag(4)) {
        flag |= EventFlag(4);
    }
    if (!EventFlag(5)) {
        flag |= EventFlag(5);
    }
    if (!EventFlag(6)) {
        flag |= EventFlag(6);
    }
    if (!EventFlag(7)) {
        flag |= EventFlag(7);
    }
    if (!EventFlag(8)) {
        flag |= EventFlag(8);
    }
    if (!EventFlag(9)) {
        flag |= EventFlag(9);
    }
    if (!EventFlag(10)) {
        flag |= EventFlag(10);
    }
    if (!EventFlag(11)) {
        flag |= EventFlag(11);
    }
    if (!EventFlag(12)) {
        flag |= EventFlag(12);
    }
    if (!EventFlag(13)) {
        flag |= EventFlag(13);
    }
    if (!EventFlag(14)) {
        flag |= EventFlag(14);
    }
    if (!EventFlag(15)) {
        flag |= EventFlag(15);
    }
    WaitFor(flag);
    IncrementEventValue(X0_4, X4_4, X8_4);
    RestartEvent();
});

$Event(840, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(X0_4));
    if (!EventFlag(844)) {
        if (!EventFlag(847)) {
            RotateCharacter(10000, X8_4, -1, false);
        }
    }
    ForceAnimationPlayback(10000, X4_4, false, false, false, 0, 1);
    WaitFixedTimeSeconds(1);
    PlaySE(10000, SoundType.s_SFX, 123456789);
    WaitFixedTimeSeconds(4);
    if (X12_4 != -1) {
        ForceAnimationPlayback(10000, X12_4, true, false, false, 0, 1);
    }
    RestartEvent();
});

$Event(870, Default, function(X0_1, X4_4) {
    WaitFor(PlayersCovenant(X0_1));
    SetEventFlag(X4_4, ON);
    WaitFor(!PlayersCovenant(X0_1));
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

$Event(14334, Restart, function() {
    WaitFor(CharacterHasSpEffect(10000, 94510000));
    WaitFor(CharacterHasSpEffect(10000, 94510001));
    SetSpEffect(10000, 94510002);
    RestartEvent();
});

$Event(90000000, Default, function() {
    InitializeEvent(0, 90010000, 20, 9036);
    InitializeEvent(1, 90010000, 21, 9037);
    InitializeEvent(2, 90010000, 35, 9038);
    InitializeEvent(0, 90020000, 21, 9037, 3900232, 100284);
});

$Event(90010000, Restart, function(X0_2, X4_4) {
    WaitFor(PlayerHasItem(ItemType.Goods, X4_4));
    RemoveItemFromPlayer(ItemType.Goods, X4_4, 999);
    AwardGestureItem(X0_2, ItemType.Goods, X4_4);
    RestartEvent();
});

$Event(90020000, Default, function(X0_2, X4_4, X8_4, X12_4) {
    EndIf(PlayerIsNotInOwnWorld());
    WaitFor(EntityInRadiusOfEntity(10000, X8_4, 5, 1) && CharacterHasSpEffect(10000, X12_4));
    AwardGestureItem(X0_2, ItemType.Goods, X4_4);
    EndEvent();
});

$Event(234, Restart, function() {
    EndIf(EventFlag(235));
    WaitFor(EventFlag(9999));
    SetMapCeremony(50, 0, 10);
    SetEventFlag(235, ON);
});

$Event(90009, Default, function() {
    SetSpEffect(10000, 8005);
});

$Event(9030, Default, function() { //Toggle flag for gravity event when get Research Note through starting gift
    EndIf(EventFlag(50004030));
    WaitFor(PlayerHasItem(ItemType.Goods, 2600));
    SetEventFlag(50004030, ON);
    EndEvent();
});
