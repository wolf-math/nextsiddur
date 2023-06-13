import { Book } from './interfaces';

const versions: Record<string, string[][]> = {
  niqqud: [
    [
      'דְּבַר־יְהוָה אֲשֶׁר הָיָה אֶל־מִיכָה הַמֹּרַשְׁתִּי בִּימֵי יוֹתָם אָחָז יְחִזְקִיָּה מַלְכֵי יְהוּדָה אֲשֶׁר־חָזָה עַל־שֹׁמְרוֹן וִירוּשָׁלִָם׃',
      'שִׁמְעוּ עַמִּים כֻּלָּם הַקְשִׁיבִי אֶרֶץ וּמְלֹאָהּ וִיהִי אֲדֹנָי יְהוִה בָּכֶם לְעֵד אֲדֹנָי מֵהֵיכַל קָדְשׁוֹ׃',
      'כִּי־הִנֵּה יְהוָה יֹצֵא מִמְּקוֹמוֹ וְיָרַד וְדָרַךְ עַל־במותי [בָּמֳתֵי] אָרֶץ׃',
      'וְנָמַסּוּ הֶהָרִים תַּחְתָּיו וְהָעֲמָקִים יִתְבַּקָּעוּ כַּדּוֹנַג מִפְּנֵי הָאֵשׁ כְּמַיִם מֻגָּרִים בְּמוֹרָד׃',
      'בְּפֶשַׁע יַעֲקֹב כָּל־זֹאת וּבְחַטֹּאות בֵּית יִשְׂרָאֵל מִי־פֶשַׁע יַעֲקֹב הֲלוֹא שֹׁמְרוֹן וּמִי בָּמוֹת יְהוּדָה הֲלוֹא יְרוּשָׁלִָם׃',
      'וְשַׂמְתִּי שֹׁמְרוֹן לְעִי הַשָּׂדֶה לְמַטָּעֵי כָרֶם וְהִגַּרְתִּי לַגַּי אֲבָנֶיהָ וִיסֹדֶיהָ אֲגַלֶּה׃',
      'וְכָל־פְּסִילֶיהָ יֻכַּתּוּ וְכָל־אֶתְנַנֶּיהָ יִשָּׂרְפוּ בָאֵשׁ וְכָל־עֲצַבֶּיהָ אָשִׂים שְׁמָמָה כִּי מֵאֶתְנַן זוֹנָה קִבָּצָה וְעַד־אֶתְנַן זוֹנָה יָשׁוּבוּ׃',
      'עַל־זֹאת אֶסְפְּדָה וְאֵילִילָה אֵילְכָה שילל [שׁוֹלָל] וְעָרוֹם אֶעֱשֶׂה מִסְפֵּד כַּתַּנִּים וְאֵבֶל כִּבְנוֹת יַעֲנָה׃',
      'כִּי אֲנוּשָׁה מַכּוֹתֶיהָ כִּי־בָאָה עַד־יְהוּדָה נָגַע עַד־שַׁעַר עַמִּי עַד־יְרוּשָׁלִָם׃',
      'בְּגַת אַל־תַּגִּידוּ בָּכוֹ אַל־תִּבְכּוּ בְּבֵית לְעַפְרָה עָפָר התפלשתי [הִתְפַּלָּשִׁי׃]',
      'עִבְרִי לָכֶם יוֹשֶׁבֶת שָׁפִיר עֶרְיָה־בֹשֶׁת לֹא יָצְאָה יוֹשֶׁבֶת צַאֲנָן מִסְפַּד בֵּית הָאֵצֶל יִקַּח מִכֶּם עֶמְדָּתוֹ׃',
      'כִּי־חָלָה לְטוֹב יוֹשֶׁבֶת מָרוֹת כִּי־יָרַד רָע מֵאֵת יְהוָה לְשַׁעַר יְרוּשָׁלִָם׃',
      'רְתֹם הַמֶּרְכָּבָה לָרֶכֶשׁ יוֹשֶׁבֶת לָכִישׁ רֵאשִׁית חַטָּאת הִיא לְבַת־צִיּוֹן כִּי־בָךְ נִמְצְאוּ פִּשְׁעֵי יִשְׂרָאֵל׃',
      'לָכֵן תִּתְּנִי שִׁלּוּחִים עַל מוֹרֶשֶׁת גַּת בָּתֵּי אַכְזִיב לְאַכְזָב לְמַלְכֵי יִשְׂרָאֵל׃',
      'עֹד הַיֹּרֵשׁ אָבִי לָךְ יוֹשֶׁבֶת מָרֵשָׁה עַד־עֲדֻּלָּם יָבוֹא כְּבוֹד יִשְׂרָאֵל׃',
      'קָרְחִי וָגֹזִּי עַל־בְּנֵי תַּעֲנוּגָיִךְ הַרְחִבִי קָרְחָתֵךְ כַּנֶּשֶׁר כִּי גָלוּ מִמֵּךְ׃'
    ],
    [
      'הוֹי חֹשְׁבֵי־אָוֶן וּפֹעֲלֵי רָע עַל־מִשְׁכְּבוֹתָם בְּאוֹר הַבֹּקֶר יַעֲשׂוּהָ כִּי יֶשׁ־לְאֵל יָדָם׃',
      'וְחָמְדוּ שָׂדוֹת וְגָזָלוּ וּבָתִּים וְנָשָׂאוּ וְעָשְׁקוּ גֶּבֶר וּבֵיתוֹ וְאִישׁ וְנַחֲלָתוֹ׃',
      'לָכֵן כֹּה אָמַר יְהוָה הִנְנִי חֹשֵׁב עַל־הַמִּשְׁפָּחָה הַזֹּאת רָעָה אֲשֶׁר לֹא־תָמִישׁוּ מִשָּׁם צַוְּארֹתֵיכֶם וְלֹא תֵלְכוּ רוֹמָה כִּי עֵת רָעָה הִיא׃',
      'בַּיּוֹם הַהוּא יִשָּׂא עֲלֵיכֶם מָשָׁל וְנָהָה נְהִי נִהְיָה אָמַר שָׁדוֹד נְשַׁדֻּנוּ חֵלֶק עַמִּי יָמִיר אֵיךְ יָמִישׁ לִי לְשׁוֹבֵב שָׂדֵינוּ יְחַלֵּק׃',
      'לָכֵן לֹא־יִהְיֶה לְךָ מַשְׁלִיךְ חֶבֶל בְּגוֹרָל בִּקְהַל יְהוָה׃',
      'אַל־תַּטִּפוּ יַטִּיפוּן לֹא־יַטִּפוּ לָאֵלֶּה לֹא יִסַּג כְּלִמּוֹת׃',
      'הֶאָמוּר בֵּית־יַעֲקֹב הֲקָצַר רוּחַ יְהוָה אִם־אֵלֶּה מַעֲלָלָיו הֲלוֹא דְבָרַי יֵיטִיבוּ עִם הַיָּשָׁר הוֹלֵךְ׃',
      'וְאֶתְמוּל עַמִּי לְאוֹיֵב יְקוֹמֵם מִמּוּל שַׂלְמָה אֶדֶר תַּפְשִׁטוּן מֵעֹבְרִים בֶּטַח שׁוּבֵי מִלְחָמָה׃',
      'נְשֵׁי עַמִּי תְּגָרְשׁוּן מִבֵּית תַּעֲנֻגֶיהָ מֵעַל עֹלָלֶיהָ תִּקְחוּ הֲדָרִי לְעוֹלָם׃',
      'קוּמוּ וּלְכוּ כִּי לֹא־זֹאת הַמְּנוּחָה בַּעֲבוּר טָמְאָה תְּחַבֵּל וְחֶבֶל נִמְרָץ׃',
      'לוּ־אִישׁ הֹלֵךְ רוּחַ וָשֶׁקֶר כִּזֵּב אַטִּף לְךָ לַיַּיִן וְלַשֵּׁכָר וְהָיָה מַטִּיף הָעָם הַזֶּה׃',
      'אָסֹף אֶאֱסֹף יַעֲקֹב כֻּלָּךְ קַבֵּץ אֲקַבֵּץ שְׁאֵרִית יִשְׂרָאֵל יַחַד אֲשִׂימֶנּוּ כְּצֹאן בָּצְרָה כְּעֵדֶר בְּתוֹךְ הַדָּבְרוֹ תְּהִימֶנָה מֵאָדָם׃',
      'עָלָה הַפֹּרֵץ לִפְנֵיהֶם פָּרְצוּ וַיַּעֲבֹרוּ שַׁעַר וַיֵּצְאוּ בוֹ וַיַּעֲבֹר מַלְכָּם לִפְנֵיהֶם וַיהוָה בְּרֹאשָׁם׃'
    ],
    [
      'וָאֹמַר שִׁמְעוּ־נָא רָאשֵׁי יַעֲקֹב וּקְצִינֵי בֵּית יִשְׂרָאֵל הֲלוֹא לָכֶם לָדַעַת אֶת־הַמִּשְׁפָּט׃',
      'שֹׂנְאֵי טוֹב וְאֹהֲבֵי רעה [רָע] גֹּזְלֵי עוֹרָם מֵעֲלֵיהֶם וּשְׁאֵרָם מֵעַל עַצְמוֹתָם׃',
      'וַאֲשֶׁר אָכְלוּ שְׁאֵר עַמִּי וְעוֹרָם מֵעֲלֵיהֶם הִפְשִׁיטוּ וְאֶת־עַצְמֹתֵיהֶם פִּצֵּחוּ וּפָרְשׂוּ כַּאֲשֶׁר בַּסִּיר וּכְבָשָׂר בְּתוֹךְ קַלָּחַת׃',
      'אָז יִזְעֲקוּ אֶל־יְהוָה וְלֹא יַעֲנֶה אוֹתָם וְיַסְתֵּר פָּנָיו מֵהֶם בָּעֵת הַהִיא כַּאֲשֶׁר הֵרֵעוּ מַעַלְלֵיהֶם׃',
      'כֹּה אָמַר יְהוָה עַל־הַנְּבִיאִים הַמַּתְעִים אֶת־עַמִּי הַנֹּשְׁכִים בְּשִׁנֵּיהֶם וְקָרְאוּ שָׁלוֹם וַאֲשֶׁר לֹא־יִתֵּן עַל־פִּיהֶם וְקִדְּשׁוּ עָלָיו מִלְחָמָה׃',
      'לָכֵן לַיְלָה לָכֶם מֵחָזוֹן וְחָשְׁכָה לָכֶם מִקְּסֹם וּבָאָה הַשֶּׁמֶשׁ עַל־הַנְּבִיאִים וְקָדַר עֲלֵיהֶם הַיּוֹם׃',
      'וּבֹשׁוּ הַחֹזִים וְחָפְרוּ הַקֹּסְמִים וְעָטוּ עַל־שָׂפָם כֻּלָּם כִּי אֵין מַעֲנֵה אֱלֹהִים׃',
      'וְאוּלָם אָנֹכִי מָלֵאתִי כֹחַ אֶת־רוּחַ יְהוָה וּמִשְׁפָּט וּגְבוּרָה לְהַגִּיד לְיַעֲקֹב פִּשְׁעוֹ וּלְיִשְׂרָאֵל חַטָּאתוֹ׃',
      'שִׁמְעוּ־נָא זֹאת רָאשֵׁי בֵּית יַעֲקֹב וּקְצִינֵי בֵּית יִשְׂרָאֵל הַמֲתַעֲבִים מִשְׁפָּט וְאֵת כָּל־הַיְשָׁרָה יְעַקֵּשׁוּ׃',
      'בֹּנֶה צִיּוֹן בְּדָמִים וִירוּשָׁלִַם בְּעַוְלָה׃',
      'רָאשֶׁיהָ בְּשֹׁחַד יִשְׁפֹּטוּ וְכֹהֲנֶיהָ בִּמְחִיר יוֹרוּ וּנְבִיאֶיהָ בְּכֶסֶף יִקְסֹמוּ וְעַל־יְהוָה יִשָּׁעֵנוּ לֵאמֹר הֲלוֹא יְהוָה בְּקִרְבֵּנוּ לֹא־תָבוֹא עָלֵינוּ רָעָה׃',
      'לָכֵן בִּגְלַלְכֶם צִיּוֹן שָׂדֶה תֵחָרֵשׁ וִירוּשָׁלִַם עִיִּין תִּהְיֶה וְהַר הַבַּיִת לְבָמוֹת יָעַר׃'
    ],
    [
      'וְהָיָה בְּאַחֲרִית הַיָּמִים יִהְיֶה הַר בֵּית־יְהוָה נָכוֹן בְּרֹאשׁ הֶהָרִים וְנִשָּׂא הוּא מִגְּבָעוֹת וְנָהֲרוּ עָלָיו עַמִּים׃',
      'וְהָלְכוּ גּוֹיִם רַבִּים וְאָמְרוּ לְכוּ וְנַעֲלֶה אֶל־הַר־יְהוָה וְאֶל־בֵּית אֱלֹהֵי יַעֲקֹב וְיוֹרֵנוּ מִדְּרָכָיו וְנֵלְכָה בְּאֹרְחֹתָיו כִּי מִצִּיּוֹן תֵּצֵא תוֹרָה וּדְבַר־יְהוָה מִירוּשָׁלִָם׃',
      'וְשָׁפַט בֵּין עַמִּים רַבִּים וְהוֹכִיחַ לְגוֹיִם עֲצֻמִים עַד־רָחוֹק וְכִתְּתוּ חַרְבֹתֵיהֶם לְאִתִּים וַחֲנִיתֹתֵיהֶם לְמַזְמֵרוֹת לֹא־יִשְׂאוּ גּוֹי אֶל־גּוֹי חֶרֶב וְלֹא־יִלְמְדוּן עוֹד מִלְחָמָה׃',
      'וְיָשְׁבוּ אִישׁ תַּחַת גַּפְנוֹ וְתַחַת תְּאֵנָתוֹ וְאֵין מַחֲרִיד כִּי־פִי יְהוָה צְבָאוֹת דִּבֵּר׃',
      'כִּי כָּל־הָעַמִּים יֵלְכוּ אִישׁ בְּשֵׁם אֱלֹהָיו וַאֲנַחְנוּ נֵלֵךְ בְּשֵׁם־יְהוָה אֱלֹהֵינוּ לְעוֹלָם וָעֶד׃',
      'בַּיּוֹם הַהוּא נְאֻם־יְהוָה אֹסְפָה הַצֹּלֵעָה וְהַנִּדָּחָה אֲקַבֵּצָה וַאֲשֶׁר הֲרֵעֹתִי׃',
      'וְשַׂמְתִּי אֶת־הַצֹּלֵעָה לִשְׁאֵרִית וְהַנַּהֲלָאָה לְגוֹי עָצוּם וּמָלַךְ יְהוָה עֲלֵיהֶם בְּהַר צִיּוֹן מֵעַתָּה וְעַד־עוֹלָם׃',
      'וְאַתָּה מִגְדַּל־עֵדֶר עֹפֶל בַּת־צִיּוֹן עָדֶיךָ תֵּאתֶה וּבָאָה הַמֶּמְשָׁלָה הָרִאשֹׁנָה מַמְלֶכֶת לְבַת־יְרוּשָׁלִָם׃',
      'עַתָּה לָמָּה תָרִיעִי רֵעַ הֲמֶלֶךְ אֵין־בָּךְ אִם־יוֹעֲצֵךְ אָבָד כִּי־הֶחֱזִיקֵךְ חִיל כַּיּוֹלֵדָה׃',
      'חוּלִי וָגֹחִי בַּת־צִיּוֹן כַּיּוֹלֵדָה כִּי־עַתָּה תֵצְאִי מִקִּרְיָה וְשָׁכַנְתְּ בַּשָּׂדֶה וּבָאת עַד־בָּבֶל שָׁם תִּנָּצֵלִי שָׁם יִגְאָלֵךְ יְהוָה מִכַּף אֹיְבָיִךְ׃',
      'וְעַתָּה נֶאֶסְפוּ עָלַיִךְ גּוֹיִם רַבִּים הָאֹמְרִים תֶּחֱנָף וְתַחַז בְּצִיּוֹן עֵינֵינוּ׃',
      'וְהֵמָּה לֹא יָדְעוּ מַחְשְׁבוֹת יְהוָה וְלֹא הֵבִינוּ עֲצָתוֹ כִּי קִבְּצָם כֶּעָמִיר גֹּרְנָה׃',
      'קוּמִי וָדוֹשִׁי בַת־צִיּוֹן כִּי־קַרְנֵךְ אָשִׂים בַּרְזֶל וּפַרְסֹתַיִךְ אָשִׂים נְחוּשָׁה וַהֲדִקּוֹת עַמִּים רַבִּים וְהַחֲרַמְתִּי לַיהוָה בִּצְעָם וְחֵילָם לַאֲדוֹן כָּל־הָאָרֶץ׃',
      'עַתָּה תִּתְגֹּדְדִי בַת־גְּדוּד מָצוֹר שָׂם עָלֵינוּ בַּשֵּׁבֶט יַכּוּ עַל־הַלְּחִי אֵת שֹׁפֵט יִשְׂרָאֵל׃'
    ],
    [
      'וְאַתָּה בֵּית־לֶחֶם אֶפְרָתָה צָעִיר לִהְיוֹת בְּאַלְפֵי יְהוּדָה מִמְּךָ לִי יֵצֵא לִהְיוֹת מוֹשֵׁל בְּיִשְׂרָאֵל וּמוֹצָאֹתָיו מִקֶּדֶם מִימֵי עוֹלָם׃',
      'לָכֵן יִתְּנֵם עַד־עֵת יוֹלֵדָה יָלָדָה וְיֶתֶר אֶחָיו יְשׁוּבוּן עַל־בְּנֵי יִשְׂרָאֵל׃',
      'וְעָמַד וְרָעָה בְּעֹז יְהוָה בִּגְאוֹן שֵׁם יְהוָה אֱלֹהָיו וְיָשָׁבוּ כִּי־עַתָּה יִגְדַּל עַד־אַפְסֵי־אָרֶץ׃',
      'וְהָיָה זֶה שָׁלוֹם אַשּׁוּר כִּי־יָבוֹא בְאַרְצֵנוּ וְכִי יִדְרֹךְ בְּאַרְמְנֹתֵינוּ וַהֲקֵמֹנוּ עָלָיו שִׁבְעָה רֹעִים וּשְׁמֹנָה נְסִיכֵי אָדָם׃',
      'וְרָעוּ אֶת־אֶרֶץ אַשּׁוּר בַּחֶרֶב וְאֶת־אֶרֶץ נִמְרֹד בִּפְתָחֶיהָ וְהִצִּיל מֵאַשּׁוּר כִּי־יָבוֹא בְאַרְצֵנוּ וְכִי יִדְרֹךְ בִּגְבוּלֵנוּ׃',
      'וְהָיָה שְׁאֵרִית יַעֲקֹב בְּקֶרֶב עַמִּים רַבִּים כְּטַל מֵאֵת יְהוָה כִּרְבִיבִים עֲלֵי־עֵשֶׂב אֲשֶׁר לֹא־יְקַוֶּה לְאִישׁ וְלֹא יְיַחֵל לִבְנֵי אָדָם׃',
      'וְהָיָה שְׁאֵרִית יַעֲקֹב בַּגּוֹיִם בְּקֶרֶב עַמִּים רַבִּים כְּאַרְיֵה בְּבַהֲמוֹת יַעַר כִּכְפִיר בְּעֶדְרֵי צֹאן אֲשֶׁר אִם עָבַר וְרָמַס וְטָרַף וְאֵין מַצִּיל׃',
      'תָּרֹם יָדְךָ עַל־צָרֶיךָ וְכָל־אֹיְבֶיךָ יִכָּרֵתוּ׃',
      'וְהָיָה בַיּוֹם־הַהוּא נְאֻם־יְהוָה וְהִכְרַתִּי סוּסֶיךָ מִקִּרְבֶּךָ וְהַאֲבַדְתִּי מַרְכְּבֹתֶיךָ׃',
      'וְהִכְרַתִּי עָרֵי אַרְצֶךָ וְהָרַסְתִּי כָּל־מִבְצָרֶיךָ׃',
      'וְהִכְרַתִּי כְשָׁפִים מִיָּדֶךָ וּמְעוֹנְנִים לֹא יִהְיוּ־לָךְ׃',
      'וְהִכְרַתִּי פְסִילֶיךָ וּמַצֵּבוֹתֶיךָ מִקִּרְבֶּךָ וְלֹא־תִשְׁתַּחֲוֶה עוֹד לְמַעֲשֵׂה יָדֶיךָ׃',
      'וְנָתַשְׁתִּי אֲשֵׁירֶיךָ מִקִּרְבֶּךָ וְהִשְׁמַדְתִּי עָרֶיךָ׃',
      'וְעָשִׂיתִי בְּאַף וּבְחֵמָה נָקָם אֶת־הַגּוֹיִם אֲשֶׁר לֹא שָׁמֵעוּ׃'
    ],
    [
      'שִׁמְעוּ־נָא אֵת אֲשֶׁר־יְהוָה אֹמֵר קוּם רִיב אֶת־הֶהָרִים וְתִשְׁמַעְנָה הַגְּבָעוֹת קוֹלֶךָ׃',
      'שִׁמְעוּ הָרִים אֶת־רִיב יְהוָה וְהָאֵתָנִים מֹסְדֵי אָרֶץ כִּי רִיב לַיהוָה עִם־עַמּוֹ וְעִם־יִשְׂרָאֵל יִתְוַכָּח׃',
      'עַמִּי מֶה־עָשִׂיתִי לְךָ וּמָה הֶלְאֵתִיךָ עֲנֵה בִּי׃',
      'כִּי הֶעֱלִתִיךָ מֵאֶרֶץ מִצְרַיִם וּמִבֵּית עֲבָדִים פְּדִיתִיךָ וָאֶשְׁלַח לְפָנֶיךָ אֶת־מֹשֶׁה אַהֲרֹן וּמִרְיָם׃',
      'עַמִּי זְכָר־נָא מַה־יָּעַץ בָּלָק מֶלֶךְ מוֹאָב וּמֶה־עָנָה אֹתוֹ בִּלְעָם בֶּן־בְּעוֹר מִן־הַשִּׁטִּים עַד־הַגִּלְגָּל לְמַעַן דַּעַת צִדְקוֹת יְהוָה׃',
      'בַּמָּה אֲקַדֵּם יְהוָה אִכַּף לֵאלֹהֵי מָרוֹם הַאֲקַדְּמֶנּוּ בְעוֹלוֹת בַּעֲגָלִים בְּנֵי שָׁנָה׃',
      'הֲיִרְצֶה יְהוָה בְּאַלְפֵי אֵילִים בְּרִבְבוֹת נַחֲלֵי־שָׁמֶן הַאֶתֵּן בְּכוֹרִי פִּשְׁעִי פְּרִי בִטְנִי חַטַּאת נַפְשִׁי׃',
      'הִגִּיד לְךָ אָדָם מַה־טּוֹב וּמָה־יְהוָה דּוֹרֵשׁ מִמְּךָ כִּי אִם־עֲשׂוֹת מִשְׁפָּט וְאַהֲבַת חֶסֶד וְהַצְנֵעַ לֶכֶת עִם־אֱלֹהֶיךָ׃',
      'קוֹל יְהוָה לָעִיר יִקְרָא וְתוּשִׁיָּה יִרְאֶה שְׁמֶךָ שִׁמְעוּ מַטֶּה וּמִי יְעָדָהּ׃',
      'עוֹד הַאִשׁ בֵּית רָשָׁע אֹצְרוֹת רֶשַׁע וְאֵיפַת רָזוֹן זְעוּמָה׃',
      'הַאֶזְכֶּה בְּמֹאזְנֵי רֶשַׁע וּבְכִיס אַבְנֵי מִרְמָה׃',
      'אֲשֶׁר עֲשִׁירֶיהָ מָלְאוּ חָמָס וְיֹשְׁבֶיהָ דִּבְּרוּ־שָׁקֶר וּלְשׁוֹנָם רְמִיָּה בְּפִיהֶם׃',
      'וְגַם־אֲנִי הֶחֱלֵיתִי הַכּוֹתֶךָ הַשְׁמֵם עַל־חַטֹּאתֶךָ׃',
      'אַתָּה תֹאכַל וְלֹא תִשְׂבָּע וְיֶשְׁחֲךָ בְּקִרְבֶּךָ וְתַסֵּג וְלֹא תַפְלִיט וַאֲשֶׁר תְּפַלֵּט לַחֶרֶב אֶתֵּן׃',
      'אַתָּה תִזְרַע וְלֹא תִקְצוֹר אַתָּה תִדְרֹךְ־זַיִת וְלֹא־תָסוּךְ שֶׁמֶן וְתִירוֹשׁ וְלֹא תִשְׁתֶּה־יָּיִן׃',
      'וְיִשְׁתַּמֵּר חֻקּוֹת עָמְרִי וְכֹל מַעֲשֵׂה בֵית־אַחְאָב וַתֵּלְכוּ בְּמֹעֲצוֹתָם לְמַעַן תִּתִּי אֹתְךָ לְשַׁמָּה וְיֹשְׁבֶיהָ לִשְׁרֵקָה וְחֶרְפַּת עַמִּי תִּשָּׂאוּ׃'
    ],
    [
      'אַלְלַי לִי כִּי הָיִיתִי כְּאָסְפֵּי־קַיִץ כְּעֹלְלֹת בָּצִיר אֵין־אֶשְׁכּוֹל לֶאֱכוֹל בִּכּוּרָה אִוְּתָה נַפְשִׁי׃',
      'אָבַד חָסִיד מִן־הָאָרֶץ וְיָשָׁר בָּאָדָם אָיִן כֻּלָּם לְדָמִים יֶאֱרֹבוּ אִישׁ אֶת־אָחִיהוּ יָצוּדוּ חֵרֶם׃',
      'עַל־הָרַע כַּפַּיִם לְהֵיטִיב הַשַּׂר שֹׁאֵל וְהַשֹּׁפֵט בַּשִׁלּוּם וְהַגָּדוֹל דֹּבֵר הַוַּת נַפְשׁוֹ הוּא וַיְעַבְּתוּהָ׃',
      'טוֹבָם כְּחֵדֶק יָשָׁר מִמְּסוּכָה יוֹם מְצַפֶּיךָ פְּקֻדָּתְךָ בָאָה עַתָּה תִהְיֶה מְבוּכָתָם׃',
      'אַל־תַּאֲמִינוּ בְרֵעַ אַל־תִּבְטְחוּ בְּאַלּוּף מִשֹּׁכֶבֶת חֵיקֶךָ שְׁמֹר פִּתְחֵי־פִיךָ׃',
      'כִּי־בֵן מְנַבֵּל אָב בַּת קָמָה בְאִמָּהּ כַּלָּה בַּחֲמֹתָהּ אֹיְבֵי אִישׁ אַנְשֵׁי בֵיתוֹ׃',
      'וַאֲנִי בַּיהוָה אֲצַפֶּה אוֹחִילָה לֵאלֹהֵי יִשְׁעִי יִשְׁמָעֵנִי אֱלֹהָי׃',
      'אַל־תִּשְׂמְחִי אֹיַבְתִּי לִי כִּי נָפַלְתִּי קָמְתִּי כִּי־אֵשֵׁב בַּחֹשֶׁךְ יְהוָה אוֹר לִי׃',
      'זַעַף יְהוָה אֶשָּׂא כִּי חָטָאתִי לוֹ עַד אֲשֶׁר יָרִיב רִיבִי וְעָשָׂה מִשְׁפָּטִי יוֹצִיאֵנִי לָאוֹר אֶרְאֶה בְּצִדְקָתוֹ׃',
      'וְתֵרֶא אֹיַבְתִּי וּתְכַסֶּהָ בוּשָׁה הָאֹמְרָה אֵלַי אַיּוֹ יְהוָה אֱלֹהָיִךְ עֵינַי תִּרְאֶינָּה בָּהּ עַתָּה תִּהְיֶה לְמִרְמָס כְּטִיט חוּצוֹת׃',
      'יוֹם לִבְנוֹת גְּדֵרָיִךְ יוֹם הַהוּא יִרְחַק־חֹק׃',
      'יוֹם הוּא וְעָדֶיךָ יָבוֹא לְמִנִּי אַשּׁוּר וְעָרֵי מָצוֹר וּלְמִנִּי מָצוֹר וְעַד־נָהָר וְיָם מִיָּם וְהַר הָהָר׃',
      'וְהָיְתָה הָאָרֶץ לִשְׁמָמָה עַל־יֹשְׁבֶיהָ מִפְּרִי מַעַלְלֵיהֶם׃',
      'רְעֵה עַמְּךָ בְשִׁבְטֶךָ צֹאן נַחֲלָתֶךָ שֹׁכְנִי לְבָדָד יַעַר בְּתוֹךְ כַּרְמֶל יִרְעוּ בָשָׁן וְגִלְעָד כִּימֵי עוֹלָם׃',
      'כִּימֵי צֵאתְךָ מֵאֶרֶץ מִצְרָיִם אַרְאֶנּוּ נִפְלָאוֹת׃',
      'יִרְאוּ גוֹיִם וְיֵבֹשׁוּ מִכֹּל גְּבוּרָתָם יָשִׂימוּ יָד עַל־פֶּה אָזְנֵיהֶם תֶּחֱרַשְׁנָה׃',
      'יְלַחֲכוּ עָפָר כַּנָּחָשׁ כְּזֹחֲלֵי אֶרֶץ יִרְגְּזוּ מִמִּסְגְּרֹתֵיהֶם אֶל־יְהוָה אֱלֹהֵינוּ יִפְחָדוּ וְיִרְאוּ מִמֶּךָּ׃',
      'מִי־אֵל כָּמוֹךָ נֹשֵׂא עָוֺן וְעֹבֵר עַל־פֶּשַׁע לִשְׁאֵרִית נַחֲלָתוֹ לֹא־הֶחֱזִיק לָעַד אַפּוֹ כִּי־חָפֵץ חֶסֶד הוּא׃',
      'יָשׁוּב יְרַחֲמֵנוּ יִכְבֹּשׁ עֲוֺנֹתֵינוּ וְתַשְׁלִיךְ בִּמְצֻלוֹת יָם כָּל־חַטֹּאותָם׃',
      'תִּתֵּן אֱמֶת לְיַעֲקֹב חֶסֶד לְאַבְרָהָם אֲשֶׁר־נִשְׁבַּעְתָּ לַאֲבֹתֵינוּ מִימֵי קֶדֶם׃'
    ]
  ],
  taameiHaMiqra: [
    [
      'דְּבַר־יְהוָ֣ה ׀ אֲשֶׁ֣ר הָיָ֗ה אֶל־מִיכָה֙ הַמֹּ֣רַשְׁתִּ֔י בִּימֵ֥י יוֹתָ֛ם אָחָ֥ז יְחִזְקִיָּ֖ה מַלְכֵ֣י יְהוּדָ֑ה אֲשֶׁר־חָזָ֥ה עַל־שֹׁמְר֖וֹן וִירֽוּשָׁלִָֽם׃',
      'שִׁמְעוּ֙ עַמִּ֣ים כֻּלָּ֔ם הַקְשִׁ֖יבִי אֶ֣רֶץ וּמְלֹאָ֑הּ וִיהִי֩ אֲדֹנָ֨י יְהוִ֤ה בָּכֶם֙ לְעֵ֔ד אֲדֹנָ֖י מֵהֵיכַ֥ל קָדְשֽׁוֹ׃',
      'כִּֽי־הִנֵּ֥ה יְהוָ֖ה יֹצֵ֣א מִמְּקוֹמ֑וֹ וְיָרַ֥ד וְדָרַ֖ךְ עַל־במותי [בָּ֥מֳתֵי] אָֽרֶץ׃',
      'וְנָמַ֤סּוּ הֶֽהָרִים֙ תַּחְתָּ֔יו וְהָעֲמָקִ֖ים יִתְבַּקָּ֑עוּ כַּדּוֹנַג֙ מִפְּנֵ֣י הָאֵ֔שׁ כְּמַ֖יִם מֻגָּרִ֥ים בְּמוֹרָֽד׃',
      'בְּפֶ֤שַׁע יַֽעֲקֹב֙ כָּל־זֹ֔את וּבְחַטֹּ֖אות בֵּ֣ית יִשְׂרָאֵ֑ל מִֽי־פֶ֣שַׁע יַעֲקֹ֗ב הֲלוֹא֙ שֹֽׁמְר֔וֹן וּמִי֙ בָּמ֣וֹת יְהוּדָ֔ה הֲל֖וֹא יְרוּשָׁלִָֽם׃',
      'וְשַׂמְתִּ֥י שֹׁמְר֛וֹן לְעִ֥י הַשָּׂדֶ֖ה לְמַטָּ֣עֵי כָ֑רֶם וְהִגַּרְתִּ֤י לַגַּי֙ אֲבָנֶ֔יהָ וִיסֹדֶ֖יהָ אֲגַלֶּֽה׃',
      'וְכָל־פְּסִילֶ֣יהָ יֻכַּ֗תּוּ וְכָל־אֶתְנַנֶּ֙יהָ֙ יִשָּׂרְפ֣וּ בָאֵ֔שׁ וְכָל־עֲצַבֶּ֖יהָ אָשִׂ֣ים שְׁמָמָ֑ה כִּ֠י מֵאֶתְנַ֤ן זוֹנָה֙ קִבָּ֔צָה וְעַד־אֶתְנַ֥ן זוֹנָ֖ה יָשֽׁוּבוּ׃',
      'עַל־זֹאת֙ אֶסְפְּדָ֣ה וְאֵילִ֔ילָה אֵילְכָ֥ה שילל [שׁוֹלָ֖ל] וְעָר֑וֹם אֶעֱשֶׂ֤ה מִסְפֵּד֙ כַּתַּנִּ֔ים וְאֵ֖בֶל כִּבְנ֥וֹת יַעֲנָֽה׃',
      'כִּ֥י אֲנוּשָׁ֖ה מַכּוֹתֶ֑יהָ כִּי־בָ֙אָה֙ עַד־יְהוּדָ֔ה נָגַ֛ע עַד־שַׁ֥עַר עַמִּ֖י עַד־יְרוּשָׁלִָֽם׃',
      'בְּגַת֙ אַל־תַּגִּ֔ידוּ בָּכ֖וֹ אַל־תִּבְכּ֑וּ בְּבֵ֣ית לְעַפְרָ֔ה עָפָ֖ר התפלשתי [הִתְפַּלָּֽשִׁי׃]',
      'עִבְרִ֥י לָכֶ֛ם יוֹשֶׁ֥בֶת שָׁפִ֖יר עֶרְיָה־בֹ֑שֶׁת לֹ֤א יָֽצְאָה֙ יוֹשֶׁ֣בֶת צַֽאֲנָ֔ן מִסְפַּד֙ בֵּ֣ית הָאֵ֔צֶל יִקַּ֥ח מִכֶּ֖ם עֶמְדָּתֽוֹ׃',
      'כִּֽי־חָ֥לָֽה לְט֖וֹב יוֹשֶׁ֣בֶת מָר֑וֹת כִּֽי־יָ֤רַד רָע֙ מֵאֵ֣ת יְהוָ֔ה לְשַׁ֖עַר יְרוּשָׁלִָֽם׃',
      'רְתֹ֧ם הַמֶּרְכָּבָ֛ה לָרֶ֖כֶשׁ יוֹשֶׁ֣בֶת לָכִ֑ישׁ רֵאשִׁ֨ית חַטָּ֥את הִיא֙ לְבַת־צִיּ֔וֹן כִּי־בָ֥ךְ נִמְצְא֖וּ פִּשְׁעֵ֥י יִשְׂרָאֵֽל׃',
      'לָכֵן֙ תִּתְּנִ֣י שִׁלּוּחִ֔ים עַ֖ל מוֹרֶ֣שֶׁת גַּ֑ת בָּתֵּ֤י אַכְזִיב֙ לְאַכְזָ֔ב לְמַלְכֵ֖י יִשְׂרָאֵֽל׃',
      'עֹ֗ד הַיֹּרֵשׁ֙ אָ֣בִי לָ֔ךְ יוֹשֶׁ֖בֶת מָֽרֵשָׁ֑ה עַד־עֲדֻּלָּ֥ם יָב֖וֹא כְּב֥וֹד יִשְׂרָאֵֽל׃',
      'קָרְחִ֣י וָגֹ֔זִּי עַל־בְּנֵ֖י תַּעֲנוּגָ֑יִךְ הַרְחִ֤בִי קָרְחָתֵךְ֙ כַּנֶּ֔שֶׁר כִּ֥י גָל֖וּ מִמֵּֽךְ׃ (ס)'
    ],
    [
      'ה֧וֹי חֹֽשְׁבֵי־אָ֛וֶן וּפֹ֥עֲלֵי רָ֖ע עַל־מִשְׁכְּבוֹתָ֑ם בְּא֤וֹר הַבֹּ֙קֶר֙ יַעֲשׂ֔וּהָ כִּ֥י יֶשׁ־לְאֵ֖ל יָדָֽם׃',
      'וְחָמְד֤וּ שָׂדוֹת֙ וְגָזָ֔לוּ וּבָתִּ֖ים וְנָשָׂ֑אוּ וְעָֽשְׁקוּ֙ גֶּ֣בֶר וּבֵית֔וֹ וְאִ֖ישׁ וְנַחֲלָתֽוֹ׃ (פ)',
      'לָכֵ֗ן כֹּ֚ה אָמַ֣ר יְהוָ֔ה הִנְנִ֥י חֹשֵׁ֛ב עַל־הַמִּשְׁפָּחָ֥ה הַזֹּ֖את רָעָ֑ה אֲ֠שֶׁר לֹֽא־תָמִ֨ישׁוּ מִשָּׁ֜ם צַוְּארֹֽתֵיכֶ֗ם וְלֹ֤א תֵֽלְכוּ֙ רוֹמָ֔ה כִּ֛י עֵ֥ת רָעָ֖ה הִֽיא׃',
      'בַּיּ֨וֹם הַה֜וּא יִשָּׂ֧א עֲלֵיכֶ֣ם מָשָׁ֗ל וְנָהָ֨ה נְהִ֤י נִֽהְיָה֙ אָמַר֙ שָׁד֣וֹד נְשַׁדֻּ֔נוּ חֵ֥לֶק עַמִּ֖י יָמִ֑יר אֵ֚יךְ יָמִ֣ישׁ לִ֔י לְשׁוֹבֵ֥ב שָׂדֵ֖ינוּ יְחַלֵּֽק׃',
      'לָכֵן֙ לֹֽא־יִֽהְיֶ֣ה לְךָ֔ מַשְׁלִ֥יךְ חֶ֖בֶל בְּגוֹרָ֑ל בִּקְהַ֖ל יְהוָֽה׃',
      'אַל־תַּטִּ֖פוּ יַטִּיפ֑וּן לֹֽא־יַטִּ֣פוּ לָאֵ֔לֶּה לֹ֥א יִסַּ֖ג כְּלִמּֽוֹת׃',
      'הֶאָמ֣וּר בֵּֽית־יַעֲקֹ֗ב הֲקָצַר֙ ר֣וּחַ יְהוָ֔ה אִם־אֵ֖לֶּה מַעֲלָלָ֑יו הֲל֤וֹא דְבָרַ֨י יֵיטִ֔יבוּ עִ֖ם הַיָּשָׁ֥ר הוֹלֵֽךְ׃',
      'וְאֶתְמ֗וּל עַמִּי֙ לְאוֹיֵ֣ב יְקוֹמֵ֔ם מִמּ֣וּל שַׂלְמָ֔ה אֶ֖דֶר תַּפְשִׁט֑וּן מֵעֹבְרִ֣ים בֶּ֔טַח שׁוּבֵ֖י מִלְחָמָֽה׃',
      'נְשֵׁ֤י עַמִּי֙ תְּגָ֣רְשׁ֔וּן מִבֵּ֖ית תַּֽעֲנֻגֶ֑יהָ מֵעַל֙ עֹֽלָלֶ֔יהָ תִּקְח֥וּ הֲדָרִ֖י לְעוֹלָֽם׃',
      'ק֣וּמוּ וּלְכ֔וּ כִּ֥י לֹא־זֹ֖את הַמְּנוּחָ֑ה בַּעֲב֥וּר טָמְאָ֛ה תְּחַבֵּ֖ל וְחֶ֥בֶל נִמְרָֽץ׃',
      'לוּ־אִ֞ישׁ הֹלֵ֥ךְ ר֙וּחַ֙ וָשֶׁ֣קֶר כִּזֵּ֔ב אַטִּ֣ף לְךָ֔ לַיַּ֖יִן וְלַשֵּׁכָ֑ר וְהָיָ֥ה מַטִּ֖יף הָעָ֥ם הַזֶּֽה׃',
      'אָסֹ֨ף אֶאֱסֹ֜ף יַעֲקֹ֣ב כֻּלָּ֗ךְ קַבֵּ֤ץ אֲקַבֵּץ֙ שְׁאֵרִ֣ית יִשְׂרָאֵ֔ל יַ֥חַד אֲשִׂימֶ֖נּוּ כְּצֹ֣אן בָּצְרָ֑ה כְּעֵ֙דֶר֙ בְּת֣וֹךְ הַדָּֽבְר֔וֹ תְּהִימֶ֖נָה מֵאָדָֽם׃',
      'עָלָ֤ה הַפֹּרֵץ֙ לִפְנֵיהֶ֔ם פָּֽרְצוּ֙ וַֽיַּעֲבֹ֔רוּ שַׁ֖עַר וַיֵּ֣צְאוּ ב֑וֹ וַיַּעֲבֹ֤ר מַלְכָּם֙ לִפְנֵיהֶ֔ם וַיהוָ֖ה בְּרֹאשָֽׁם׃ (פ)'
    ],
    [
      'וָאֹמַ֗ר שִׁמְעוּ־נָא֙ רָאשֵׁ֣י יַעֲקֹ֔ב וּקְצִינֵ֖י בֵּ֣ית יִשְׂרָאֵ֑ל הֲל֣וֹא לָכֶ֔ם לָדַ֖עַת אֶת־הַמִּשְׁפָּֽט׃',
      'שֹׂ֥נְאֵי ט֖וֹב וְאֹ֣הֲבֵי רעה [רָ֑ע] גֹּזְלֵ֤י עוֹרָם֙ מֵֽעֲלֵיהֶ֔ם וּשְׁאֵרָ֖ם מֵעַ֥ל עַצְמוֹתָֽם׃',
      'וַאֲשֶׁ֣ר אָכְלוּ֮ שְׁאֵ֣ר עַמִּי֒ וְעוֹרָם֙ מֵעֲלֵיהֶ֣ם הִפְשִׁ֔יטוּ וְאֶת־עַצְמֹֽתֵיהֶ֖ם פִּצֵּ֑חוּ וּפָרְשׂוּ֙ כַּאֲשֶׁ֣ר בַּסִּ֔יר וּכְבָשָׂ֖ר בְּת֥וֹךְ קַלָּֽחַת׃',
      'אָ֚ז יִזְעֲק֣וּ אֶל־יְהוָ֔ה וְלֹ֥א יַעֲנֶ֖ה אוֹתָ֑ם וְיַסְתֵּ֨ר פָּנָ֤יו מֵהֶם֙ בָּעֵ֣ת הַהִ֔יא כַּאֲשֶׁ֥ר הֵרֵ֖עוּ מַעַלְלֵיהֶֽם׃ (פ)',
      'כֹּ֚ה אָמַ֣ר יְהוָ֔ה עַל־הַנְּבִיאִ֖ים הַמַּתְעִ֣ים אֶת־עַמִּ֑י הַנֹּשְׁכִ֤ים בְּשִׁנֵּיהֶם֙ וְקָרְא֣וּ שָׁל֔וֹם וַאֲשֶׁר֙ לֹא־יִתֵּ֣ן עַל־פִּיהֶ֔ם וְקִדְּשׁ֥וּ עָלָ֖יו מִלְחָמָֽה׃',
      'לָכֵ֞ן לַ֤יְלָה לָכֶם֙ מֵֽחָז֔וֹן וְחָשְׁכָ֥ה לָכֶ֖ם מִקְּסֹ֑ם וּבָ֤אָה הַשֶּׁ֙מֶשׁ֙ עַל־הַנְּבִיאִ֔ים וְקָדַ֥ר עֲלֵיהֶ֖ם הַיּֽוֹם׃',
      'וּבֹ֣שׁוּ הַחֹזִ֗ים וְחָֽפְרוּ֙ הַקֹּ֣סְמִ֔ים וְעָט֥וּ עַל־שָׂפָ֖ם כֻּלָּ֑ם כִּ֛י אֵ֥ין מַעֲנֵ֖ה אֱלֹהִֽים׃',
      'וְאוּלָ֗ם אָנֹכִ֞י מָלֵ֤אתִי כֹ֙חַ֙ אֶת־ר֣וּחַ יְהוָ֔ה וּמִשְׁפָּ֖ט וּגְבוּרָ֑ה לְהַגִּ֤יד לְיַֽעֲקֹב֙ פִּשְׁע֔וֹ וּלְיִשְׂרָאֵ֖ל חַטָּאתֽוֹ׃ (ס)',
      'שִׁמְעוּ־נָ֣א זֹ֗את רָאשֵׁי֙ בֵּ֣ית יַעֲקֹ֔ב וּקְצִינֵ֖י בֵּ֣ית יִשְׂרָאֵ֑ל הַֽמֲתַעֲבִ֣ים מִשְׁפָּ֔ט וְאֵ֥ת כָּל־הַיְשָׁרָ֖ה יְעַקֵּֽשׁוּ׃',
      'בֹּנֶ֥ה צִיּ֖וֹן בְּדָמִ֑ים וִירוּשָׁלִַ֖ם בְּעַוְלָֽה׃',
      'רָאשֶׁ֣יהָ ׀ בְּשֹׁ֣חַד יִשְׁפֹּ֗טוּ וְכֹהֲנֶ֙יהָ֙ בִּמְחִ֣יר יוֹר֔וּ וּנְבִיאֶ֖יהָ בְּכֶ֣סֶף יִקְסֹ֑מוּ וְעַל־יְהוָה֙ יִשָּׁעֵ֣נוּ לֵאמֹ֔ר הֲל֤וֹא יְהוָה֙ בְּקִרְבֵּ֔נוּ לֹֽא־תָב֥וֹא עָלֵ֖ינוּ רָעָֽה׃',
      'לָכֵן֙ בִּגְלַלְכֶ֔ם צִיּ֖וֹן שָׂדֶ֣ה תֵֽחָרֵ֑שׁ וִירוּשָׁלִַ֙ם֙ עִיִּ֣ין תִּֽהְיֶ֔ה וְהַ֥ר הַבַּ֖יִת לְבָמ֥וֹת יָֽעַר׃ (פ)'
    ],
    [
      'וְהָיָ֣ה ׀ בְּאַחֲרִ֣ית הַיָּמִ֗ים יִ֠הְיֶה הַ֣ר בֵּית־יְהוָ֤ה נָכוֹן֙ בְּרֹ֣אשׁ הֶהָרִ֔ים וְנִשָּׂ֥א ה֖וּא מִגְּבָע֑וֹת וְנָהֲר֥וּ עָלָ֖יו עַמִּֽים׃',
      'וְֽהָלְכ֞וּ גּוֹיִ֣ם רַבִּ֗ים וְאָֽמְרוּ֙ לְכ֣וּ ׀ וְנַעֲלֶ֣ה אֶל־הַר־יְהוָ֗ה וְאֶל־בֵּית֙ אֱלֹהֵ֣י יַעֲקֹ֔ב וְיוֹרֵ֙נוּ֙ מִדְּרָכָ֔יו וְנֵלְכָ֖ה בְּאֹֽרְחֹתָ֑יו כִּ֤י מִצִּיּוֹן֙ תֵּצֵ֣א תוֹרָ֔ה וּדְבַר־יְהוָ֖ה מִירוּשָׁלִָֽם׃',
      'וְשָׁפַ֗ט בֵּ֚ין עַמִּ֣ים רַבִּ֔ים וְהוֹכִ֛יחַ לְגוֹיִ֥ם עֲצֻמִ֖ים עַד־רָח֑וֹק וְכִתְּת֨וּ חַרְבֹתֵיהֶ֜ם לְאִתִּ֗ים וַחֲנִיתֹֽתֵיהֶם֙ לְמַזְמֵר֔וֹת לֹֽא־יִשְׂא֞וּ גּ֤וֹי אֶל־גּוֹי֙ חֶ֔רֶב וְלֹא־יִלְמְד֥וּן ע֖וֹד מִלְחָמָֽה׃',
      'וְיָשְׁב֗וּ אִ֣ישׁ תַּ֧חַת גַּפְנ֛וֹ וְתַ֥חַת תְּאֵנָת֖וֹ וְאֵ֣ין מַחֲרִ֑יד כִּי־פִ֛י יְהוָ֥ה צְבָא֖וֹת דִּבֵּֽר׃',
      'כִּ֚י כָּל־הָ֣עַמִּ֔ים יֵלְכ֕וּ אִ֖ישׁ בְּשֵׁ֣ם אֱלֹהָ֑יו וַאֲנַ֗חְנוּ נֵלֵ֛ךְ בְּשֵׁם־יְהוָ֥ה אֱלֹהֵ֖ינוּ לְעוֹלָ֥ם וָעֶֽד׃ (פ)',
      'בַּיּ֨וֹם הַה֜וּא נְאֻם־יְהוָ֗ה אֹֽסְפָה֙ הַצֹּ֣לֵעָ֔ה וְהַנִּדָּחָ֖ה אֲקַבֵּ֑צָה וַאֲשֶׁ֖ר הֲרֵעֹֽתִי׃',
      'וְשַׂמְתִּ֤י אֶת־הַצֹּֽלֵעָה֙ לִשְׁאֵרִ֔ית וְהַנַּהֲלָאָ֖ה לְג֣וֹי עָצ֑וּם וּמָלַ֨ךְ יְהוָ֤ה עֲלֵיהֶם֙ בְּהַ֣ר צִיּ֔וֹן מֵעַתָּ֖ה וְעַד־עוֹלָֽם׃ (פ)',
      'וְאַתָּ֣ה מִגְדַּל־עֵ֗דֶר עֹ֛פֶל בַּת־צִיּ֖וֹן עָדֶ֣יךָ תֵּאתֶ֑ה וּבָאָ֗ה הַמֶּמְשָׁלָה֙ הָרִ֣אשֹׁנָ֔ה מַמְלֶ֖כֶת לְבַ֥ת־יְרוּשָׁלִָֽם׃',
      'עַתָּ֕ה לָ֥מָּה תָרִ֖יעִי רֵ֑עַ הֲמֶ֣לֶךְ אֵֽין־בָּ֗ךְ אִֽם־יוֹעֲצֵךְ֙ אָבָ֔ד כִּֽי־הֶחֱזִיקֵ֥ךְ חִ֖יל כַּיּוֹלֵדָֽה׃',
      'ח֧וּלִי וָגֹ֛חִי בַּת־צִיּ֖וֹן כַּיּֽוֹלֵדָ֑ה כִּֽי־עַתָּה֩ תֵצְאִ֨י מִקִּרְיָ֜ה וְשָׁכַ֣נְתְּ בַּשָּׂדֶ֗ה וּבָ֤את עַד־בָּבֶל֙ שָׁ֣ם תִּנָּצֵ֔לִי שָׁ֚ם יִגְאָלֵ֣ךְ יְהוָ֔ה מִכַּ֖ף אֹיְבָֽיִךְ׃',
      'וְעַתָּ֛ה נֶאֶסְפ֥וּ עָלַ֖יִךְ גּוֹיִ֣ם רַבִּ֑ים הָאֹמְרִ֣ים תֶּחֱנָ֔ף וְתַ֥חַז בְּצִיּ֖וֹן עֵינֵֽינוּ׃',
      'וְהֵ֗מָּה לֹ֤א יָֽדְעוּ֙ מַחְשְׁב֣וֹת יְהוָ֔ה וְלֹ֥א הֵבִ֖ינוּ עֲצָת֑וֹ כִּ֥י קִבְּצָ֖ם כֶּעָמִ֥יר גֹּֽרְנָה׃',
      'ק֧וּמִי וָד֣וֹשִׁי בַת־צִיּ֗וֹן כִּֽי־קַרְנֵ֞ךְ אָשִׂ֤ים בַּרְזֶל֙ וּפַרְסֹתַ֙יִךְ֙ אָשִׂ֣ים נְחוּשָׁ֔ה וַהֲדִקּ֖וֹת עַמִּ֣ים רַבִּ֑ים וְהַחֲרַמְתִּ֤י לַֽיהוָה֙ בִּצְעָ֔ם וְחֵילָ֖ם לַאֲד֥וֹן כָּל־הָאָֽרֶץ׃',
      'עַתָּה֙ תִּתְגֹּדְדִ֣י בַת־גְּד֔וּד מָצ֖וֹר שָׂ֣ם עָלֵ֑ינוּ בַּשֵּׁ֙בֶט֙ יַכּ֣וּ עַֽל־הַלְּחִ֔י אֵ֖ת שֹׁפֵ֥ט יִשְׂרָאֵֽל׃ (ס)'
    ],
    [
      'וְאַתָּ֞ה בֵּֽית־לֶ֣חֶם אֶפְרָ֗תָה צָעִיר֙ לִֽהְיוֹת֙ בְּאַלְפֵ֣י יְהוּדָ֔ה מִמְּךָ֙ לִ֣י יֵצֵ֔א לִֽהְי֥וֹת מוֹשֵׁ֖ל בְּיִשְׂרָאֵ֑ל וּמוֹצָאֹתָ֥יו מִקֶּ֖דֶם מִימֵ֥י עוֹלָֽם׃',
      'לָכֵ֣ן יִתְּנֵ֔ם עַד־עֵ֥ת יוֹלֵדָ֖ה יָלָ֑דָה וְיֶ֣תֶר אֶחָ֔יו יְשׁוּב֖וּן עַל־בְּנֵ֥י יִשְׂרָאֵֽל׃',
      'וְעָמַ֗ד וְרָעָה֙ בְּעֹ֣ז יְהוָ֔ה בִּגְא֕וֹן שֵׁ֖ם יְהוָ֣ה אֱלֹהָ֑יו וְיָשָׁ֕בוּ כִּֽי־עַתָּ֥ה יִגְדַּ֖ל עַד־אַפְסֵי־אָֽרֶץ׃',
      'וְהָיָ֥ה זֶ֖ה שָׁל֑וֹם אַשּׁ֣וּר ׀ כִּֽי־יָב֣וֹא בְאַרְצֵ֗נוּ וְכִ֤י יִדְרֹךְ֙ בְּאַרְמְנֹתֵ֔ינוּ וַהֲקֵמֹ֤נוּ עָלָיו֙ שִׁבְעָ֣ה רֹעִ֔ים וּשְׁמֹנָ֖ה נְסִיכֵ֥י אָדָֽם׃',
      'וְרָע֞וּ אֶת־אֶ֤רֶץ אַשּׁוּר֙ בַּחֶ֔רֶב וְאֶת־אֶ֥רֶץ נִמְרֹ֖ד בִּפְתָחֶ֑יהָ וְהִצִּיל֙ מֵֽאַשּׁ֔וּר כִּֽי־יָב֣וֹא בְאַרְצֵ֔נוּ וְכִ֥י יִדְרֹ֖ךְ בִּגְבוּלֵֽנוּ׃ (ס)',
      'וְהָיָ֣ה ׀ שְׁאֵרִ֣ית יַעֲקֹ֗ב בְּקֶ֙רֶב֙ עַמִּ֣ים רַבִּ֔ים כְּטַל֙ מֵאֵ֣ת יְהוָ֔ה כִּרְבִיבִ֖ים עֲלֵי־עֵ֑שֶׂב אֲשֶׁ֤ר לֹֽא־יְקַוֶּה֙ לְאִ֔ישׁ וְלֹ֥א יְיַחֵ֖ל לִבְנֵ֥י אָדָֽם׃',
      'וְהָיָה֩ שְׁאֵרִ֨ית יַעֲקֹ֜ב בַּגּוֹיִ֗ם בְּקֶ֙רֶב֙ עַמִּ֣ים רַבִּ֔ים כְּאַרְיֵה֙ בְּבַהֲמ֣וֹת יַ֔עַר כִּכְפִ֖יר בְּעֶדְרֵי צֹ֑אן אֲשֶׁ֧ר אִם עָבַ֛ר וְרָמַ֥ס וְטָרַ֖ף וְאֵ֥ין מַצִּֽיל׃',
      'תָּרֹ֥ם יָדְךָ֖ עַל־צָרֶ֑יךָ וְכָל־אֹיְבֶ֖יךָ יִכָּרֵֽתוּ׃ (פ)',
      'וְהָיָ֤ה בַיּוֹם־הַהוּא֙ נְאֻם־יְהוָ֔ה וְהִכְרַתִּ֥י סוּסֶ֖יךָ מִקִּרְבֶּ֑ךָ וְהַאֲבַדְתִּ֖י מַרְכְּבֹתֶֽיךָ׃',
      'וְהִכְרַתִּ֖י עָרֵ֣י אַרְצֶ֑ךָ וְהָרַסְתִּ֖י כָּל־מִבְצָרֶֽיךָ׃',
      'וְהִכְרַתִּ֥י כְשָׁפִ֖ים מִיָּדֶ֑ךָ וּֽמְעוֹנְנִ֖ים לֹ֥א יִֽהְיוּ־לָֽךְ׃',
      'וְהִכְרַתִּ֧י פְסִילֶ֛יךָ וּמַצֵּבוֹתֶ֖יךָ מִקִּרְבֶּ֑ךָ וְלֹֽא־תִשְׁתַּחֲוֶ֥ה ע֖וֹד לְמַעֲשֵׂ֥ה יָדֶֽיךָ׃',
      'וְנָתַשְׁתִּ֥י אֲשֵׁירֶ֖יךָ מִקִּרְבֶּ֑ךָ וְהִשְׁמַדְתִּ֖י עָרֶֽיךָ׃',
      'וְעָשִׂ֜יתִי בְּאַ֧ף וּבְחֵמָ֛ה נָקָ֖ם אֶת־הַגּוֹיִ֑ם אֲשֶׁ֖ר לֹ֥א שָׁמֵֽעוּ׃ (ס)'
    ],
    [
      'שִׁמְעוּ־נָ֕א אֵ֥ת אֲשֶׁר־יְהוָ֖ה אֹמֵ֑ר ק֚וּם רִ֣יב אֶת־הֶהָרִ֔ים וְתִשְׁמַ֥עְנָה הַגְּבָע֖וֹת קוֹלֶֽךָ׃',
      'שִׁמְע֤וּ הָרִים֙ אֶת־רִ֣יב יְהוָ֔ה וְהָאֵתָנִ֖ים מֹ֣סְדֵי אָ֑רֶץ כִּ֣י רִ֤יב לַֽיהוָה֙ עִם־עַמּ֔וֹ וְעִם־יִשְׂרָאֵ֖ל יִתְוַכָּֽח׃',
      'עַמִּ֛י מֶה־עָשִׂ֥יתִי לְךָ֖ וּמָ֣ה הֶלְאֵתִ֑יךָ עֲנֵ֥ה בִּֽי׃',
      'כִּ֤י הֶעֱלִתִ֙יךָ֙ מֵאֶ֣רֶץ מִצְרַ֔יִם וּמִבֵּ֥ית עֲבָדִ֖ים פְּדִיתִ֑יךָ וָאֶשְׁלַ֣ח לְפָנֶ֔יךָ אֶת־מֹשֶׁ֖ה אַהֲרֹ֥ן וּמִרְיָֽם׃',
      'עַמִּ֗י זְכָר־נָא֙ מַה־יָּעַ֗ץ בָּלָק֙ מֶ֣לֶךְ מוֹאָ֔ב וּמֶה־עָנָ֥ה אֹת֖וֹ בִּלְעָ֣ם בֶּן־בְּע֑וֹר מִן־הַשִּׁטִּים֙ עַד־הַגִּלְגָּ֔ל לְמַ֕עַן דַּ֖עַת צִדְק֥וֹת יְהוָֽה׃',
      'בַּמָּה֙ אֲקַדֵּ֣ם יְהוָ֔ה אִכַּ֖ף לֵאלֹהֵ֣י מָר֑וֹם הַאֲקַדְּמֶ֣נּוּ בְעוֹל֔וֹת בַּעֲגָלִ֖ים בְּנֵ֥י שָׁנָֽה׃',
      'הֲיִרְצֶ֤ה יְהוָה֙ בְּאַלְפֵ֣י אֵילִ֔ים בְּרִֽבְב֖וֹת נַֽחֲלֵי־שָׁ֑מֶן הַאֶתֵּ֤ן בְּכוֹרִי֙ פִּשְׁעִ֔י פְּרִ֥י בִטְנִ֖י חַטַּ֥את נַפְשִֽׁי׃',
      'הִגִּ֥יד לְךָ֛ אָדָ֖ם מַה־טּ֑וֹב וּמָֽה־יְהוָ֞ה דּוֹרֵ֣שׁ מִמְּךָ֗ כִּ֣י אִם־עֲשׂ֤וֹת מִשְׁפָּט֙ וְאַ֣הֲבַת חֶ֔סֶד וְהַצְנֵ֥עַ לֶ֖כֶת עִם־אֱלֹהֶֽיךָ׃ (פ)',
      'ק֤וֹל יְהוָה֙ לָעִ֣יר יִקְרָ֔א וְתוּשִׁיָּ֖ה יִרְאֶ֣ה שְׁמֶ֑ךָ שִׁמְע֥וּ מַטֶּ֖ה וּמִ֥י יְעָדָֽהּ׃',
      'ע֗וֹד הַאִשׁ֙ בֵּ֣ית רָשָׁ֔ע אֹצְר֖וֹת רֶ֑שַׁע וְאֵיפַ֥ת רָז֖וֹן זְעוּמָֽה׃',
      'הַאֶזְכֶּ֖ה בְּמֹ֣אזְנֵי רֶ֑שַׁע וּבְכִ֖יס אַבְנֵ֥י מִרְמָֽה׃',
      'אֲשֶׁ֤ר עֲשִׁירֶ֙יהָ֙ מָלְא֣וּ חָמָ֔ס וְיֹשְׁבֶ֖יהָ דִּבְּרוּ־שָׁ֑קֶר וּלְשׁוֹנָ֖ם רְמִיָּ֥ה בְּפִיהֶֽם׃',
      'וְגַם־אֲנִ֖י הֶחֱלֵ֣יתִי הַכּוֹתֶ֑ךָ הַשְׁמֵ֖ם עַל־חַטֹּאתֶֽךָ׃',
      'אַתָּ֤ה תֹאכַל֙ וְלֹ֣א תִשְׂבָּ֔ע וְיֶשְׁחֲךָ֖ בְּקִרְבֶּ֑ךָ וְתַסֵּג֙ וְלֹ֣א תַפְלִ֔יט וַאֲשֶׁ֥ר תְּפַלֵּ֖ט לַחֶ֥רֶב אֶתֵּֽן׃',
      'אַתָּ֥ה תִזְרַ֖ע וְלֹ֣א תִקְצ֑וֹר אַתָּ֤ה תִדְרֹֽךְ־זַ֙יִת֙ וְלֹא־תָס֣וּךְ שֶׁ֔מֶן וְתִיר֖וֹשׁ וְלֹ֥א תִשְׁתֶּה־יָּֽיִן׃',
      'וְיִשְׁתַּמֵּ֞ר חֻקּ֣וֹת עָמְרִ֗י וְכֹל֙ מַעֲשֵׂ֣ה בֵית־אַחְאָ֔ב וַתֵּלְכ֖וּ בְּמֹֽעֲצוֹתָ֑ם לְמַעַן֩ תִּתִּ֨י אֹתְךָ֜ לְשַׁמָּ֗ה וְיֹשְׁבֶ֙יהָ֙ לִשְׁרֵקָ֔ה וְחֶרְפַּ֥ת עַמִּ֖י תִּשָּֽׂאוּ׃ (פ)'
    ],
    [
      'אַ֣לְלַי לִ֗י כִּ֤י הָיִ֙יתִי֙ כְּאָסְפֵּי־קַ֔יִץ כְּעֹלְלֹ֖ת בָּצִ֑יר אֵין־אֶשְׁכּ֣וֹל לֶאֱכ֔וֹל בִּכּוּרָ֖ה אִוְּתָ֥ה נַפְשִֽׁי׃',
      'אָבַ֤ד חָסִיד֙ מִן־הָאָ֔רֶץ וְיָשָׁ֥ר בָּאָדָ֖ם אָ֑יִן כֻּלָּם֙ לְדָמִ֣ים יֶאֱרֹ֔בוּ אִ֥ישׁ אֶת־אָחִ֖יהוּ יָצ֥וּדוּ חֵֽרֶם׃',
      'עַל־הָרַ֤ע כַּפַּ֙יִם֙ לְהֵיטִ֔יב הַשַּׂ֣ר שֹׁאֵ֔ל וְהַשֹּׁפֵ֖ט בַּשִׁלּ֑וּם וְהַגָּד֗וֹל דֹּבֵ֨ר הַוַּ֥ת נַפְשׁ֛וֹ ה֖וּא וַֽיְעַבְּתֽוּהָ׃',
      'טוֹבָ֣ם כְּחֵ֔דֶק יָשָׁ֖ר מִמְּסוּכָ֑ה י֤וֹם מְצַפֶּ֙יךָ֙ פְּקֻדָּתְךָ֣ בָ֔אָה עַתָּ֥ה תִהְיֶ֖ה מְבוּכָתָֽם׃',
      'אַל־תַּאֲמִ֣ינוּ בְרֵ֔עַ אַֽל־תִּבְטְח֖וּ בְּאַלּ֑וּף מִשֹּׁכֶ֣בֶת חֵיקֶ֔ךָ שְׁמֹ֖ר פִּתְחֵי־פִֽיךָ׃',
      'כִּֽי־בֵן֙ מְנַבֵּ֣ל אָ֔ב בַּ֚ת קָמָ֣ה בְאִמָּ֔הּ כַּלָּ֖ה בַּחֲמֹתָ֑הּ אֹיְבֵ֥י אִ֖ישׁ אַנְשֵׁ֥י בֵיתֽוֹ׃',
      'וַאֲנִי֙ בַּיהוָ֣ה אֲצַפֶּ֔ה אוֹחִ֖ילָה לֵאלֹהֵ֣י יִשְׁעִ֑י יִשְׁמָעֵ֖נִי אֱלֹהָֽי׃',
      'אַֽל־תִּשְׂמְחִ֤י אֹיַ֙בְתִּי֙ לִ֔י כִּ֥י נָפַ֖לְתִּי קָ֑מְתִּי כִּֽי־אֵשֵׁ֣ב בַּחֹ֔שֶׁךְ יְהוָ֖ה א֥וֹר לִֽי׃ (ס)',
      'זַ֤עַף יְהוָה֙ אֶשָּׂ֔א כִּ֥י חָטָ֖אתִי ל֑וֹ עַד֩ אֲשֶׁ֨ר יָרִ֤יב רִיבִי֙ וְעָשָׂ֣ה מִשְׁפָּטִ֔י יוֹצִיאֵ֣נִי לָא֔וֹר אֶרְאֶ֖ה בְּצִדְקָתֽוֹ׃',
      'וְתֵרֶ֤א אֹיַ֙בְתִּי֙ וּתְכַסֶּ֣הָ בוּשָׁ֔ה הָאֹמְרָ֣ה אֵלַ֔י אַיּ֖וֹ יְהוָ֣ה אֱלֹהָ֑יִךְ עֵינַי֙ תִּרְאֶ֣ינָּה בָּ֔הּ עַתָּ֛ה תִּֽהְיֶ֥ה לְמִרְמָ֖ס כְּטִ֥יט חוּצֽוֹת׃',
      'י֖וֹם לִבְנ֣וֹת גְּדֵרָ֑יִךְ י֥וֹם הַה֖וּא יִרְחַק־חֹֽק׃',
      'י֥וֹם הוּא֙ וְעָדֶ֣יךָ יָב֔וֹא לְמִנִּ֥י אַשּׁ֖וּר וְעָרֵ֣י מָצ֑וֹר וּלְמִנִּ֤י מָצוֹר֙ וְעַד־נָהָ֔ר וְיָ֥ם מִיָּ֖ם וְהַ֥ר הָהָֽר׃',
      'וְהָיְתָ֥ה הָאָ֛רֶץ לִשְׁמָמָ֖ה עַל־יֹֽשְׁבֶ֑יהָ מִפְּרִ֖י מַֽעַלְלֵיהֶֽם׃ (ס)',
      'רְעֵ֧ה עַמְּךָ֣ בְשִׁבְטֶ֗ךָ צֹ֚אן נַֽחֲלָתֶ֔ךָ שֹׁכְנִ֣י לְבָדָ֔ד יַ֖עַר בְּת֣וֹךְ כַּרְמֶ֑ל יִרְע֥וּ בָשָׁ֛ן וְגִלְעָ֖ד כִּימֵ֥י עוֹלָֽם׃',
      'כִּימֵ֥י צֵאתְךָ֖ מֵאֶ֣רֶץ מִצְרָ֑יִם אַרְאֶ֖נּוּ נִפְלָאֽוֹת׃',
      'יִרְא֤וּ גוֹיִם֙ וְיֵבֹ֔שׁוּ מִכֹּ֖ל גְּבֽוּרָתָ֑ם יָשִׂ֤ימוּ יָד֙ עַל־פֶּ֔ה אָזְנֵיהֶ֖ם תֶּחֱרַֽשְׁנָה׃',
      'יְלַחֲכ֤וּ עָפָר֙ כַּנָּחָ֔שׁ כְּזֹחֲלֵ֣י אֶ֔רֶץ יִרְגְּז֖וּ מִמִּסְגְּרֹֽתֵיהֶ֑ם אֶל־יְהוָ֤ה אֱלֹהֵ֙ינוּ֙ יִפְחָ֔דוּ וְיִֽרְא֖וּ מִמֶּֽךָּ׃',
      'מִי־אֵ֣ל כָּמ֗וֹךָ נֹשֵׂ֤א עָוֺן֙ וְעֹבֵ֣ר עַל־פֶּ֔שַׁע לִשְׁאֵרִ֖ית נַחֲלָת֑וֹ לֹא־הֶחֱזִ֤יק לָעַד֙ אַפּ֔וֹ כִּֽי־חָפֵ֥ץ חֶ֖סֶד הֽוּא׃',
      'יָשׁ֣וּב יְרַֽחֲמֵ֔נוּ יִכְבֹּ֖שׁ עֲוֺֽנֹתֵ֑ינוּ וְתַשְׁלִ֛יךְ בִּמְצֻל֥וֹת יָ֖ם כָּל־חַטֹּאותָֽם׃',
      'תִּתֵּ֤ן אֱמֶת֙ לְיַֽעֲקֹ֔ב חֶ֖סֶד לְאַבְרָהָ֑ם אֲשֶׁר־נִשְׁבַּ֥עְתָּ לַאֲבֹתֵ֖ינוּ מִ֥ימֵי קֶֽדֶם׃'
    ]
  ],
  plain: [
    [
      'דבר־יהוה אשר היה אל־מיכה המרשתי בימי יותם אחז יחזקיה מלכי יהודה אשר־חזה על־שמרון וירושלם',
      'שמעו עמים כלם הקשיבי ארץ ומלאה ויהי אדני יהוה בכם לעד אדני מהיכל קדשו',
      'כי־הנה יהוה יצא ממקומו וירד ודרך על־במותי [במתי] ארץ',
      'ונמסו ההרים תחתיו והעמקים יתבקעו כדונג מפני האש כמים מגרים במורד',
      'בפשע יעקב כל־זאת ובחטאות בית ישראל מי־פשע יעקב הלוא שמרון ומי במות יהודה הלוא ירושלם',
      'ושמתי שמרון לעי השדה למטעי כרם והגרתי לגי אבניה ויסדיה אגלה',
      'וכל־פסיליה יכתו וכל־אתנניה ישרפו באש וכל־עצביה אשים שממה כי מאתנן זונה קבצה ועד־אתנן זונה ישובו',
      'על־זאת אספדה ואילילה אילכה שילל [שולל] וערום אעשה מספד כתנים ואבל כבנות יענה',
      'כי אנושה מכותיה כי־באה עד־יהודה נגע עד־שער עמי עד־ירושלם',
      'בגת אל־תגידו בכו אל־תבכו בבית לעפרה עפר התפלשתי [התפלשי]',
      'עברי לכם יושבת שפיר עריה־בשת לא יצאה יושבת צאנן מספד בית האצל יקח מכם עמדתו',
      'כי־חלה לטוב יושבת מרות כי־ירד רע מאת יהוה לשער ירושלם',
      'רתם המרכבה לרכש יושבת לכיש ראשית חטאת היא לבת־ציון כי־בך נמצאו פשעי ישראל',
      'לכן תתני שלוחים על מורשת גת בתי אכזיב לאכזב למלכי ישראל',
      'עד הירש אבי לך יושבת מרשה עד־עדלם יבוא כבוד ישראל',
      'קרחי וגזי על־בני תענוגיך הרחבי קרחתך כנשר כי גלו ממך'
    ],
    [
      'הוי חשבי־און ופעלי רע על־משכבותם באור הבקר יעשוה כי יש־לאל ידם',
      'וחמדו שדות וגזלו ובתים ונשאו ועשקו גבר וביתו ואיש ונחלתו',
      'לכן כה אמר יהוה הנני חשב על־המשפחה הזאת רעה אשר לא־תמישו משם צוארתיכם ולא תלכו רומה כי עת רעה היא',
      'ביום ההוא ישא עליכם משל ונהה נהי נהיה אמר שדוד נשדנו חלק עמי ימיר איך ימיש לי לשובב שדינו יחלק',
      'לכן לא־יהיה לך משליך חבל בגורל בקהל יהוה',
      'אל־תטפו יטיפון לא־יטפו לאלה לא יסג כלמות',
      'האמור בית־יעקב הקצר רוח יהוה אם־אלה מעלליו הלוא דברי ייטיבו עם הישר הולך',
      'ואתמול עמי לאויב יקומם ממול שלמה אדר תפשטון מעברים בטח שובי מלחמה',
      'נשי עמי תגרשון מבית תענגיה מעל עלליה תקחו הדרי לעולם',
      'קומו ולכו כי לא־זאת המנוחה בעבור טמאה תחבל וחבל נמרץ',
      'לו־איש הלך רוח ושקר כזב אטף לך ליין ולשכר והיה מטיף העם הזה',
      'אסף אאסף יעקב כלך קבץ אקבץ שארית ישראל יחד אשימנו כצאן בצרה כעדר בתוך הדברו תהימנה מאדם',
      'עלה הפרץ לפניהם פרצו ויעברו שער ויצאו בו ויעבר מלכם לפניהם ויהוה בראשם'
    ],
    [
      'ואמר שמעו־נא ראשי יעקב וקציני בית ישראל הלוא לכם לדעת את־המשפט',
      'שנאי טוב ואהבי רעה [רע] גזלי עורם מעליהם ושארם מעל עצמותם',
      'ואשר אכלו שאר עמי ועורם מעליהם הפשיטו ואת־עצמתיהם פצחו ופרשו כאשר בסיר וכבשר בתוך קלחת',
      'אז יזעקו אל־יהוה ולא יענה אותם ויסתר פניו מהם בעת ההיא כאשר הרעו מעלליהם',
      'כה אמר יהוה על־הנביאים המתעים את־עמי הנשכים בשניהם וקראו שלום ואשר לא־יתן על־פיהם וקדשו עליו מלחמה',
      'לכן לילה לכם מחזון וחשכה לכם מקסם ובאה השמש על־הנביאים וקדר עליהם היום',
      'ובשו החזים וחפרו הקסמים ועטו על־שפם כלם כי אין מענה אלהים',
      'ואולם אנכי מלאתי כח את־רוח יהוה ומשפט וגבורה להגיד ליעקב פשעו ולישראל חטאתו',
      'שמעו־נא זאת ראשי בית יעקב וקציני בית ישראל המתעבים משפט ואת כל־הישרה יעקשו',
      'בנה ציון בדמים וירושלם בעולה',
      'ראשיה בשחד ישפטו וכהניה במחיר יורו ונביאיה בכסף יקסמו ועל־יהוה ישענו לאמר הלוא יהוה בקרבנו לא־תבוא עלינו רעה',
      'לכן בגללכם ציון שדה תחרש וירושלם עיין תהיה והר הבית לבמות יער'
    ],
    [
      'והיה באחרית הימים יהיה הר בית־יהוה נכון בראש ההרים ונשא הוא מגבעות ונהרו עליו עמים',
      'והלכו גוים רבים ואמרו לכו ונעלה אל־הר־יהוה ואל־בית אלהי יעקב ויורנו מדרכיו ונלכה בארחתיו כי מציון תצא תורה ודבר־יהוה מירושלם',
      'ושפט בין עמים רבים והוכיח לגוים עצמים עד־רחוק וכתתו חרבתיהם לאתים וחניתתיהם למזמרות לא־ישאו גוי אל־גוי חרב ולא־ילמדון עוד מלחמה',
      'וישבו איש תחת גפנו ותחת תאנתו ואין מחריד כי־פי יהוה צבאות דבר',
      'כי כל־העמים ילכו איש בשם אלהיו ואנחנו נלך בשם־יהוה אלהינו לעולם ועד',
      'ביום ההוא נאם־יהוה אספה הצלעה והנדחה אקבצה ואשר הרעתי',
      'ושמתי את־הצלעה לשארית והנהלאה לגוי עצום ומלך יהוה עליהם בהר ציון מעתה ועד־עולם',
      'ואתה מגדל־עדר עפל בת־ציון עדיך תאתה ובאה הממשלה הראשנה ממלכת לבת־ירושלם',
      'עתה למה תריעי רע המלך אין־בך אם־יועצך אבד כי־החזיקך חיל כיולדה',
      'חולי וגחי בת־ציון כיולדה כי־עתה תצאי מקריה ושכנת בשדה ובאת עד־בבל שם תנצלי שם יגאלך יהוה מכף איביך',
      'ועתה נאספו עליך גוים רבים האמרים תחנף ותחז בציון עינינו',
      'והמה לא ידעו מחשבות יהוה ולא הבינו עצתו כי קבצם כעמיר גרנה',
      'קומי ודושי בת־ציון כי־קרנך אשים ברזל ופרסתיך אשים נחושה והדקות עמים רבים והחרמתי ליהוה בצעם וחילם לאדון כל־הארץ',
      'עתה תתגדדי בת־גדוד מצור שם עלינו בשבט יכו על־הלחי את שפט ישראל'
    ],
    [
      'ואתה בית־לחם אפרתה צעיר להיות באלפי יהודה ממך לי יצא להיות מושל בישראל ומוצאתיו מקדם מימי עולם',
      'לכן יתנם עד־עת יולדה ילדה ויתר אחיו ישובון על־בני ישראל',
      'ועמד ורעה בעז יהוה בגאון שם יהוה אלהיו וישבו כי־עתה יגדל עד־אפסי־ארץ',
      'והיה זה שלום אשור כי־יבוא בארצנו וכי ידרך בארמנתינו והקמנו עליו שבעה רעים ושמנה נסיכי אדם',
      'ורעו את־ארץ אשור בחרב ואת־ארץ נמרד בפתחיה והציל מאשור כי־יבוא בארצנו וכי ידרך בגבולנו',
      'והיה שארית יעקב בקרב עמים רבים כטל מאת יהוה כרביבים עלי־עשב אשר לא־יקוה לאיש ולא ייחל לבני אדם',
      'והיה שארית יעקב בגוים בקרב עמים רבים כאריה בבהמות יער ככפיר בעדרי צאן אשר אם עבר ורמס וטרף ואין מציל',
      'תרם ידך על־צריך וכל־איביך יכרתו',
      'והיה ביום־ההוא נאם־יהוה והכרתי סוסיך מקרבך והאבדתי מרכבתיך',
      'והכרתי ערי ארצך והרסתי כל־מבצריך',
      'והכרתי כשפים מידך ומעוננים לא יהיו־לך',
      'והכרתי פסיליך ומצבותיך מקרבך ולא־תשתחוה עוד למעשה ידיך',
      'ונתשתי אשיריך מקרבך והשמדתי עריך',
      'ועשיתי באף ובחמה נקם את־הגוים אשר לא שמעו'
    ],
    [
      'שמעו־נא את אשר־יהוה אמר קום ריב את־ההרים ותשמענה הגבעות קולך',
      'שמעו הרים את־ריב יהוה והאתנים מסדי ארץ כי ריב ליהוה עם־עמו ועם־ישראל יתוכח',
      'עמי מה־עשיתי לך ומה הלאתיך ענה בי',
      'כי העלתיך מארץ מצרים ומבית עבדים פדיתיך ואשלח לפניך את־משה אהרן ומרים',
      'עמי זכר־נא מה־יעץ בלק מלך מואב ומה־ענה אתו בלעם בן־בעור מן־השטים עד־הגלגל למען דעת צדקות יהוה',
      'במה אקדם יהוה אכף לאלהי מרום האקדמנו בעולות בעגלים בני שנה',
      'הירצה יהוה באלפי אילים ברבבות נחלי־שמן האתן בכורי פשעי פרי בטני חטאת נפשי',
      'הגיד לך אדם מה־טוב ומה־יהוה דורש ממך כי אם־עשות משפט ואהבת חסד והצנע לכת עם־אלהיך',
      'קול יהוה לעיר יקרא ותושיה יראה שמך שמעו מטה ומי יעדה',
      'עוד האש בית רשע אצרות רשע ואיפת רזון זעומה',
      'האזכה במאזני רשע ובכיס אבני מרמה',
      'אשר עשיריה מלאו חמס וישביה דברו־שקר ולשונם רמיה בפיהם',
      'וגם־אני החליתי הכותך השמם על־חטאתך',
      'אתה תאכל ולא תשבע וישחך בקרבך ותסג ולא תפליט ואשר תפלט לחרב אתן',
      'אתה תזרע ולא תקצור אתה תדרך־זית ולא־תסוך שמן ותירוש ולא תשתה־יין',
      'וישתמר חקות עמרי וכל מעשה בית־אחאב ותלכו במעצותם למען תתי אתך לשמה וישביה לשרקה וחרפת עמי תשאו'
    ],
    [
      'אללי לי כי הייתי כאספי־קיץ כעללת בציר אין־אשכול לאכול בכורה אותה נפשי',
      'אבד חסיד מן־הארץ וישר באדם אין כלם לדמים יארבו איש את־אחיהו יצודו חרם',
      'על־הרע כפים להיטיב השר שאל והשפט בשלום והגדול דבר הות נפשו הוא ויעבתוה',
      'טובם כחדק ישר ממסוכה יום מצפיך פקדתך באה עתה תהיה מבוכתם',
      'אל־תאמינו ברע אל־תבטחו באלוף משכבת חיקך שמר פתחי־פיך',
      'כי־בן מנבל אב בת קמה באמה כלה בחמתה איבי איש אנשי ביתו',
      'ואני ביהוה אצפה אוחילה לאלהי ישעי ישמעני אלהי',
      'אל־תשמחי איבתי לי כי נפלתי קמתי כי־אשב בחשך יהוה אור לי',
      'זעף יהוה אשא כי חטאתי לו עד אשר יריב ריבי ועשה משפטי יוציאני לאור אראה בצדקתו',
      'ותרא איבתי ותכסה בושה האמרה אלי איו יהוה אלהיך עיני תראינה בה עתה תהיה למרמס כטיט חוצות',
      'יום לבנות גדריך יום ההוא ירחק־חק',
      'יום הוא ועדיך יבוא למני אשור וערי מצור ולמני מצור ועד־נהר וים מים והר ההר',
      'והיתה הארץ לשממה על־ישביה מפרי מעלליהם',
      'רעה עמך בשבטך צאן נחלתך שכני לבדד יער בתוך כרמל ירעו בשן וגלעד כימי עולם',
      'כימי צאתך מארץ מצרים אראנו נפלאות',
      'יראו גוים ויבשו מכל גבורתם ישימו יד על־פה אזניהם תחרשנה',
      'ילחכו עפר כנחש כזחלי ארץ ירגזו ממסגרתיהם אל־יהוה אלהינו יפחדו ויראו ממך',
      'מי־אל כמוך נשא עון ועבר על־פשע לשארית נחלתו לא־החזיק לעד אפו כי־חפץ חסד הוא',
      'ישוב ירחמנו יכבש עונתינו ותשליך במצלות ים כל־חטאותם',
      'תתן אמת ליעקב חסד לאברהם אשר־נשבעת לאבתינו מימי קדם'
    ]
  ]
};

export const micah: Book = (version: string = 'niqqud') => {
  return { title: 'micah', heTitle: 'מיכה', text: versions[version] };
};
