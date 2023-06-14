import { Book } from './interfaces';

const versions: Record<string, string[][]> = {
  niqqud: [
    [
      'מַשָּׂא דְבַר־יְהוָה אֶל־יִשְׂרָאֵל בְּיַד מַלְאָכִי׃',
      'אָהַבְתִּי אֶתְכֶם אָמַר יְהוָה וַאֲמַרְתֶּם בַּמָּה אֲהַבְתָּנוּ הֲלוֹא־אָח עֵשָׂו לְיַעֲקֹב נְאֻם־יְהוָה וָאֹהַב אֶת־יַעֲקֹב׃',
      'וְאֶת־עֵשָׂו שָׂנֵאתִי וָאָשִׂים אֶת־הָרָיו שְׁמָמָה וְאֶת־נַחֲלָתוֹ לְתַנּוֹת מִדְבָּר׃',
      'כִּי־תֹאמַר אֱדוֹם רֻשַּׁשְׁנוּ וְנָשׁוּב וְנִבְנֶה חֳרָבוֹת כֹּה אָמַר יְהוָה צְבָאוֹת הֵמָּה יִבְנוּ וַאֲנִי אֶהֱרוֹס וְקָרְאוּ לָהֶם גְּבוּל רִשְׁעָה וְהָעָם אֲשֶׁר־זָעַם יְהוָה עַד־עוֹלָם׃',
      'וְעֵינֵיכֶם תִּרְאֶינָה וְאַתֶּם תֹּאמְרוּ יִגְדַּל יְהוָה מֵעַל לִגְבוּל יִשְׂרָאֵל׃',
      'בֵּן יְכַבֵּד אָב וְעֶבֶד אֲדֹנָיו וְאִם־אָב אָנִי אַיֵּה כְבוֹדִי וְאִם־אֲדוֹנִים אָנִי אַיֵּה מוֹרָאִי אָמַר יְהוָה צְבָאוֹת לָכֶם הַכֹּהֲנִים בּוֹזֵי שְׁמִי וַאֲמַרְתֶּם בַּמֶּה בָזִינוּ אֶת־שְׁמֶךָ׃',
      'מַגִּישִׁים עַל־מִזְבְּחִי לֶחֶם מְגֹאָל וַאֲמַרְתֶּם בַּמֶּה גֵאַלְנוּךָ בֶּאֱמָרְכֶם שֻׁלְחַן יְהוָה נִבְזֶה הוּא׃',
      'וְכִי־תַגִּשׁוּן עִוֵּר לִזְבֹּחַ אֵין רָע וְכִי תַגִּישׁוּ פִּסֵּחַ וְחֹלֶה אֵין רָע הַקְרִיבֵהוּ נָא לְפֶחָתֶךָ הֲיִּרְצְךָ אוֹ הֲיִשָּׂא פָנֶיךָ אָמַר יְהוָה צְבָאוֹת׃',
      'וְעַתָּה חַלּוּ־נָא פְנֵי־אֵל וִיחָנֵנוּ מִיֶּדְכֶם הָיְתָה זֹּאת הֲיִשָּׂא מִכֶּם פָּנִים אָמַר יְהוָה צְבָאוֹת׃',
      'מִי גַם־בָּכֶם וְיִסְגֹּר דְּלָתַיִם וְלֹא־תָאִירוּ מִזְבְּחִי חִנָּם אֵין־לִי חֵפֶץ בָּכֶם אָמַר יְהוָה צְבָאוֹת וּמִנְחָה לֹא־אֶרְצֶה מִיֶּדְכֶם׃',
      'כִּי מִמִּזְרַח־שֶׁמֶשׁ וְעַד־מְבוֹאוֹ גָּדוֹל שְׁמִי בַּגּוֹיִם וּבְכָל־מָקוֹם מֻקְטָר מֻגָּשׁ לִשְׁמִי וּמִנְחָה טְהוֹרָה כִּי־גָדוֹל שְׁמִי בַּגּוֹיִם אָמַר יְהוָה צְבָאוֹת׃',
      'וְאַתֶּם מְחַלְּלִים אוֹתוֹ בֶּאֱמָרְכֶם שֻׁלְחַן אֲדֹנָי מְגֹאָל הוּא וְנִיבוֹ נִבְזֶה אָכְלוֹ׃',
      'וַאֲמַרְתֶּם הִנֵּה מַתְּלָאָה וְהִפַּחְתֶּם אוֹתוֹ אָמַר יְהוָה צְבָאוֹת וַהֲבֵאתֶם גָּזוּל וְאֶת־הַפִּסֵּחַ וְאֶת־הַחוֹלֶה וַהֲבֵאתֶם אֶת־הַמִּנְחָה הַאֶרְצֶה אוֹתָהּ מִיֶּדְכֶם אָמַר יְהוָה׃',
      'וְאָרוּר נוֹכֵל וְיֵשׁ בְּעֶדְרוֹ זָכָר וְנֹדֵר וְזֹבֵחַ מָשְׁחָת לַאדֹנָי כִּי מֶלֶךְ גָּדוֹל אָנִי אָמַר יְהוָה צְבָאוֹת וּשְׁמִי נוֹרָא בַגּוֹיִם׃'
    ],
    [
      'וְעַתָּה אֲלֵיכֶם הַמִּצְוָה הַזֹּאת הַכֹּהֲנִים׃',
      'אִם־לֹא תִשְׁמְעוּ וְאִם־לֹא תָשִׂימוּ עַל־לֵב לָתֵת כָּבוֹד לִשְׁמִי אָמַר יְהוָה צְבָאוֹת וְשִׁלַּחְתִּי בָכֶם אֶת־הַמְּאֵרָה וְאָרוֹתִי אֶת־בִּרְכוֹתֵיכֶם וְגַם אָרוֹתִיהָ כִּי אֵינְכֶם שָׂמִים עַל־לֵב׃',
      'הִנְנִי גֹעֵר לָכֶם אֶת־הַזֶּרַע וְזֵרִיתִי פֶרֶשׁ עַל־פְּנֵיכֶם פֶּרֶשׁ חַגֵּיכֶם וְנָשָׂא אֶתְכֶם אֵלָיו׃',
      'וִידַעְתֶּם כִּי שִׁלַּחְתִּי אֲלֵיכֶם אֵת הַמִּצְוָה הַזֹּאת לִהְיוֹת בְּרִיתִי אֶת־לֵוִי אָמַר יְהוָה צְבָאוֹת׃',
      'בְּרִיתִי הָיְתָה אִתּוֹ הַחַיִּים וְהַשָּׁלוֹם וָאֶתְּנֵם־לוֹ מוֹרָא וַיִּירָאֵנִי וּמִפְּנֵי שְׁמִי נִחַת הוּא׃',
      'תּוֹרַת אֱמֶת הָיְתָה בְּפִיהוּ וְעַוְלָה לֹא־נִמְצָא בִשְׂפָתָיו בְּשָׁלוֹם וּבְמִישׁוֹר הָלַךְ אִתִּי וְרַבִּים הֵשִׁיב מֵעָוֺן׃',
      'כִּי־שִׂפְתֵי כֹהֵן יִשְׁמְרוּ־דַעַת וְתוֹרָה יְבַקְשׁוּ מִפִּיהוּ כִּי מַלְאַךְ יְהוָה־צְבָאוֹת הוּא׃',
      'וְאַתֶּם סַרְתֶּם מִן־הַדֶּרֶךְ הִכְשַׁלְתֶּם רַבִּים בַּתּוֹרָה שִׁחַתֶּם בְּרִית הַלֵּוִי אָמַר יְהוָה צְבָאוֹת׃',
      'וְגַם־אֲנִי נָתַתִּי אֶתְכֶם נִבְזִים וּשְׁפָלִים לְכָל־הָעָם כְּפִי אֲשֶׁר אֵינְכֶם שֹׁמְרִים אֶת־דְּרָכַי וְנֹשְׂאִים פָּנִים בַּתּוֹרָה׃',
      'הֲלוֹא אָב אֶחָד לְכֻלָּנוּ הֲלוֹא אֵל אֶחָד בְּרָאָנוּ מַדּוּעַ נִבְגַּד אִישׁ בְּאָחִיו לְחַלֵּל בְּרִית אֲבֹתֵינוּ׃',
      'בָּגְדָה יְהוּדָה וְתוֹעֵבָה נֶעֶשְׂתָה בְיִשְׂרָאֵל וּבִירוּשָׁלִָם כִּי חִלֵּל יְהוּדָה קֹדֶשׁ יְהוָה אֲשֶׁר אָהֵב וּבָעַל בַּת־אֵל נֵכָר׃',
      'יַכְרֵת יְהוָה לָאִישׁ אֲשֶׁר יַעֲשֶׂנָּה עֵר וְעֹנֶה מֵאָהֳלֵי יַעֲקֹב וּמַגִּישׁ מִנְחָה לַיהוָה צְבָאוֹת׃',
      'וְזֹאת שֵׁנִית תַּעֲשׂוּ כַּסּוֹת דִּמְעָה אֶת־מִזְבַּח יְהוָה בְּכִי וַאֲנָקָה מֵאֵין עוֹד פְּנוֹת אֶל־הַמִּנְחָה וְלָקַחַת רָצוֹן מִיֶּדְכֶם׃',
      'וַאֲמַרְתֶּם עַל־מָה עַל כִּי־יְהוָה הֵעִיד בֵּינְךָ וּבֵין אֵשֶׁת נְעוּרֶיךָ אֲשֶׁר אַתָּה בָּגַדְתָּה בָּהּ וְהִיא חֲבֶרְתְּךָ וְאֵשֶׁת בְּרִיתֶךָ׃',
      'וְלֹא־אֶחָד עָשָׂה וּשְׁאָר רוּחַ לוֹ וּמָה הָאֶחָד מְבַקֵּשׁ זֶרַע אֱלֹהִים וְנִשְׁמַרְתֶּם בְּרוּחֲכֶם וּבְאֵשֶׁת נְעוּרֶיךָ אַל־יִבְגֹּד׃',
      'כִּי־שָׂנֵא שַׁלַּח אָמַר יְהוָה אֱלֹהֵי יִשְׂרָאֵל וְכִסָּה חָמָס עַל־לְבוּשׁוֹ אָמַר יְהוָה צְבָאוֹת וְנִשְׁמַרְתֶּם בְּרוּחֲכֶם וְלֹא תִבְגֹּדוּ׃',
      'הוֹגַעְתֶּם יְהוָה בְּדִבְרֵיכֶם וַאֲמַרְתֶּם בַּמָּה הוֹגָעְנוּ בֶּאֱמָרְכֶם כָּל־עֹשֵׂה רָע טוֹב בְּעֵינֵי יְהוָה וּבָהֶם הוּא חָפֵץ אוֹ אַיֵּה אֱלֹהֵי הַמִּשְׁפָּט׃'
    ],
    [
      'הִנְנִי שֹׁלֵחַ מַלְאָכִי וּפִנָּה־דֶרֶךְ לְפָנָי וּפִתְאֹם יָבוֹא אֶל־הֵיכָלוֹ הָאָדוֹן אֲשֶׁר־אַתֶּם מְבַקְשִׁים וּמַלְאַךְ הַבְּרִית אֲשֶׁר־אַתֶּם חֲפֵצִים הִנֵּה־בָא אָמַר יְהוָה צְבָאוֹת׃',
      'וּמִי מְכַלְכֵּל אֶת־יוֹם בּוֹאוֹ וּמִי הָעֹמֵד בְּהֵרָאוֹתוֹ כִּי־הוּא כְּאֵשׁ מְצָרֵף וּכְבֹרִית מְכַבְּסִים׃',
      'וְיָשַׁב מְצָרֵף וּמְטַהֵר כֶּסֶף וְטִהַר אֶת־בְּנֵי־לֵוִי וְזִקַּק אֹתָם כַּזָּהָב וְכַכָּסֶף וְהָיוּ לַיהוָה מַגִּישֵׁי מִנְחָה בִּצְדָקָה׃',
      'וְעָרְבָה לַיהוָה מִנְחַת יְהוּדָה וִירוּשָׁלִָם כִּימֵי עוֹלָם וּכְשָׁנִים קַדְמֹנִיּוֹת׃',
      'וְקָרַבְתִּי אֲלֵיכֶם לַמִּשְׁפָּט וְהָיִיתִי עֵד מְמַהֵר בַּמְכַשְּׁפִים וּבַמְנָאֲפִים וּבַנִּשְׁבָּעִים לַשָּׁקֶר וּבְעֹשְׁקֵי שְׂכַר־שָׂכִיר אַלְמָנָה וְיָתוֹם וּמַטֵּי־גֵר וְלֹא יְרֵאוּנִי אָמַר יְהוָה צְבָאוֹת׃',
      'כִּי אֲנִי יְהוָה לֹא שָׁנִיתִי וְאַתֶּם בְּנֵי־יַעֲקֹב לֹא כְלִיתֶם׃',
      'לְמִימֵי אֲבֹתֵיכֶם סַרְתֶּם מֵחֻקַּי וְלֹא שְׁמַרְתֶּם שׁוּבוּ אֵלַי וְאָשׁוּבָה אֲלֵיכֶם אָמַר יְהוָה צְבָאוֹת וַאֲמַרְתֶּם בַּמֶּה נָשׁוּב׃',
      'הֲיִקְבַּע אָדָם אֱלֹהִים כִּי אַתֶּם קֹבְעִים אֹתִי וַאֲמַרְתֶּם בַּמֶּה קְבַעֲנוּךָ הַמַּעֲשֵׂר וְהַתְּרוּמָה׃',
      'בַּמְּאֵרָה אַתֶּם נֵאָרִים וְאֹתִי אַתֶּם קֹבְעִים הַגּוֹי כֻּלּוֹ׃',
      'הָבִיאוּ אֶת־כָּל־הַמַּעֲשֵׂר אֶל־בֵּית הָאוֹצָר וִיהִי טֶרֶף בְּבֵיתִי וּבְחָנוּנִי נָא בָּזֹאת אָמַר יְהוָה צְבָאוֹת אִם־לֹא אֶפְתַּח לָכֶם אֵת אֲרֻבּוֹת הַשָּׁמַיִם וַהֲרִיקֹתִי לָכֶם בְּרָכָה עַד־בְּלִי־דָי׃',
      'וְגָעַרְתִּי לָכֶם בָּאֹכֵל וְלֹא־יַשְׁחִת לָכֶם אֶת־פְּרִי הָאֲדָמָה וְלֹא־תְשַׁכֵּל לָכֶם הַגֶּפֶן בַּשָּׂדֶה אָמַר יְהוָה צְבָאוֹת׃',
      'וְאִשְּׁרוּ אֶתְכֶם כָּל־הַגּוֹיִם כִּי־תִהְיוּ אַתֶּם אֶרֶץ חֵפֶץ אָמַר יְהוָה צְבָאוֹת׃',
      'חָזְקוּ עָלַי דִּבְרֵיכֶם אָמַר יְהוָה וַאֲמַרְתֶּם מַה־נִּדְבַּרְנוּ עָלֶיךָ׃',
      'אֲמַרְתֶּם שָׁוְא עֲבֹד אֱלֹהִים וּמַה־בֶּצַע כִּי שָׁמַרְנוּ מִשְׁמַרְתּוֹ וְכִי הָלַכְנוּ קְדֹרַנִּית מִפְּנֵי יְהוָה צְבָאוֹת׃',
      'וְעַתָּה אֲנַחְנוּ מְאַשְּׁרִים זֵדִים גַּם־נִבְנוּ עֹשֵׂי רִשְׁעָה גַּם בָּחֲנוּ אֱלֹהִים וַיִּמָּלֵטוּ׃',
      'אָז נִדְבְּרוּ יִרְאֵי יְהוָה אִישׁ אֶת־רֵעֵהוּ וַיַּקְשֵׁב יְהוָה וַיִּשְׁמָע וַיִּכָּתֵב סֵפֶר זִכָּרוֹן לְפָנָיו לְיִרְאֵי יְהוָה וּלְחֹשְׁבֵי שְׁמוֹ׃',
      'וְהָיוּ לִי אָמַר יְהוָה צְבָאוֹת לַיּוֹם אֲשֶׁר אֲנִי עֹשֶׂה סְגֻלָּה וְחָמַלְתִּי עֲלֵיהֶם כַּאֲשֶׁר יַחְמֹל אִישׁ עַל־בְּנוֹ הָעֹבֵד אֹתוֹ׃',
      'וְשַׁבְתֶּם וּרְאִיתֶם בֵּין צַדִּיק לְרָשָׁע בֵּין עֹבֵד אֱלֹהִים לַאֲשֶׁר לֹא עֲבָדוֹ׃',
      'כִּי־הִנֵּה הַיּוֹם בָּא בֹּעֵר כַּתַּנּוּר וְהָיוּ כָל־זֵדִים וְכָל־עֹשֵׂה רִשְׁעָה קַשׁ וְלִהַט אֹתָם הַיּוֹם הַבָּא אָמַר יְהוָה צְבָאוֹת אֲשֶׁר לֹא־יַעֲזֹב לָהֶם שֹׁרֶשׁ וְעָנָף׃',
      'וְזָרְחָה לָכֶם יִרְאֵי שְׁמִי שֶׁמֶשׁ צְדָקָה וּמַרְפֵּא בִּכְנָפֶיהָ וִיצָאתֶם וּפִשְׁתֶּם כְּעֶגְלֵי מַרְבֵּק׃',
      'וְעַסּוֹתֶם רְשָׁעִים כִּי־יִהְיוּ אֵפֶר תַּחַת כַּפּוֹת רַגְלֵיכֶם בַּיּוֹם אֲשֶׁר אֲנִי עֹשֶׂה אָמַר יְהוָה צְבָאוֹת׃',
      'זִכְרוּ תּוֹרַת מֹשֶׁה עַבְדִּי אֲשֶׁר צִוִּיתִי אוֹתוֹ בְחֹרֵב עַל־כָּל־יִשְׂרָאֵל חֻקִּים וּמִשְׁפָּטִים׃',
      'הִנֵּה אָנֹכִי שֹׁלֵחַ לָכֶם אֵת אֵלִיָּה הַנָּבִיא לִפְנֵי בּוֹא יוֹם יְהוָה הַגָּדוֹל וְהַנּוֹרָא׃',
      'וְהֵשִׁיב לֵב־אָבוֹת עַל־בָּנִים וְלֵב בָּנִים עַל־אֲבוֹתָם פֶּן־אָבוֹא וְהִכֵּיתִי אֶת־הָאָרֶץ חֵרֶם׃<br><small>[הנה אנכי שלח לכם את אליה הנביא לפני בוא יום יהוה הגדול והנורא]</small>'
    ]
  ],
  taameiHaMiqra: [
    [
      'מַשָּׂ֥א דְבַר־יְהוָ֖ה אֶל־יִשְׂרָאֵ֑ל בְּיַ֖ד מַלְאָכִֽי׃',
      'אָהַ֤בְתִּי אֶתְכֶם֙ אָמַ֣ר יְהוָ֔ה וַאֲמַרְתֶּ֖ם בַּמָּ֣ה אֲהַבְתָּ֑נוּ הֲלוֹא־אָ֨ח עֵשָׂ֤ו לְיַֽעֲקֹב֙ נְאֻם־יְהוָ֔ה וָאֹהַ֖ב אֶֽת־יַעֲקֹֽב׃',
      'וְאֶת־עֵשָׂ֖ו שָׂנֵ֑אתִי וָאָשִׂ֤ים אֶת־הָרָיו֙ שְׁמָמָ֔ה וְאֶת־נַחֲלָת֖וֹ לְתַנּ֥וֹת מִדְבָּֽר׃',
      'כִּֽי־תֹאמַ֨ר אֱד֜וֹם רֻשַּׁ֗שְׁנוּ וְנָשׁוּב֙ וְנִבְנֶ֣ה חֳרָב֔וֹת כֹּ֤ה אָמַר֙ יְהוָ֣ה צְבָא֔וֹת הֵ֥מָּה יִבְנ֖וּ וַאֲנִ֣י אֶהֱר֑וֹס וְקָרְא֤וּ לָהֶם֙ גְּב֣וּל רִשְׁעָ֔ה וְהָעָ֛ם אֲשֶׁר־זָעַ֥ם יְהוָ֖ה עַד־עוֹלָֽם׃',
      'וְעֵינֵיכֶ֖ם תִּרְאֶ֑ינָה וְאַתֶּ֤ם תֹּֽאמְרוּ֙ יִגְדַּ֣ל יְהוָ֔ה מֵעַ֖ל לִגְב֥וּל יִשְׂרָאֵֽל׃',
      'בֵּ֛ן יְכַבֵּ֥ד אָ֖ב וְעֶ֣בֶד אֲדֹנָ֑יו וְאִם־אָ֣ב אָ֣נִי אַיֵּ֣ה כְבוֹדִ֡י וְאִם־אֲדוֹנִ֣ים אָנִי֩ אַיֵּ֨ה מוֹרָאִ֜י אָמַ֣ר ׀ יְהוָ֣ה צְבָא֗וֹת לָכֶם֙ הַכֹּֽהֲנִים֙ בּוֹזֵ֣י שְׁמִ֔י וַאֲמַרְתֶּ֕ם בַּמֶּ֥ה בָזִ֖ינוּ אֶת־שְׁמֶֽךָ׃',
      'מַגִּישִׁ֤ים עַֽל־מִזְבְּחִי֙ לֶ֣חֶם מְגֹאָ֔ל וַאֲמַרְתֶּ֖ם בַּמֶּ֣ה גֵֽאַלְנ֑וּךָ בֶּאֱמָרְכֶ֕ם שֻׁלְחַ֥ן יְהוָ֖ה נִבְזֶ֥ה הֽוּא׃',
      'וְכִֽי־תַגִּשׁ֨וּן עִוֵּ֤ר לִזְבֹּ֙חַ֙ אֵ֣ין רָ֔ע וְכִ֥י תַגִּ֛ישׁוּ פִּסֵּ֥חַ וְחֹלֶ֖ה אֵ֣ין רָ֑ע הַקְרִיבֵ֨הוּ נָ֜א לְפֶחָתֶ֗ךָ הֲיִּרְצְךָ֙ א֚וֹ הֲיִשָּׂ֣א פָנֶ֔יךָ אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'וְעַתָּ֛ה חַלּוּ־נָ֥א פְנֵי־אֵ֖ל וִֽיחָנֵ֑נוּ מִיֶּדְכֶם֙ הָ֣יְתָה זֹּ֔את הֲיִשָּׂ֤א מִכֶּם֙ פָּנִ֔ים אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'מִ֤י גַם־בָּכֶם֙ וְיִסְגֹּ֣ר דְּלָתַ֔יִם וְלֹֽא־תָאִ֥ירוּ מִזְבְּחִ֖י חִנָּ֑ם אֵֽין־לִ֨י חֵ֜פֶץ בָּכֶ֗ם אָמַר֙ יְהוָ֣ה צְבָא֔וֹת וּמִנְחָ֖ה לֹֽא־אֶרְצֶ֥ה מִיֶּדְכֶֽם׃',
      'כִּ֣י מִמִּזְרַח־שֶׁ֜מֶשׁ וְעַד־מְבוֹא֗וֹ גָּד֤וֹל שְׁמִי֙ בַּגּוֹיִ֔ם וּבְכָל־מָק֗וֹם מֻקְטָ֥ר מֻגָּ֛שׁ לִשְׁמִ֖י וּמִנְחָ֣ה טְהוֹרָ֑ה כִּֽי־גָד֤וֹל שְׁמִי֙ בַּגּוֹיִ֔ם אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'וְאַתֶּ֖ם מְחַלְּלִ֣ים אוֹת֑וֹ בֶּאֱמָרְכֶ֗ם שֻׁלְחַ֤ן אֲדֹנָי֙ מְגֹאָ֣ל ה֔וּא וְנִיב֖וֹ נִבְזֶ֥ה אָכְלֽוֹ׃',
      'וַאֲמַרְתֶּם֩ הִנֵּ֨ה מַתְּלָאָ֜ה וְהִפַּחְתֶּ֣ם אוֹת֗וֹ אָמַר֙ יְהוָ֣ה צְבָא֔וֹת וַהֲבֵאתֶ֣ם גָּז֗וּל וְאֶת־הַפִּסֵּ֙חַ֙ וְאֶת־הַ֣חוֹלֶ֔ה וַהֲבֵאתֶ֖ם אֶת־הַמִּנְחָ֑ה הַאֶרְצֶ֥ה אוֹתָ֛הּ מִיֶּדְכֶ֖ם אָמַ֥ר יְהוָֽה׃ (ס)',
      'וְאָר֣וּר נוֹכֵ֗ל וְיֵ֤שׁ בְּעֶדְרוֹ֙ זָכָ֔ר וְנֹדֵ֛ר וְזֹבֵ֥חַ מָשְׁחָ֖ת לַֽאדֹנָ֑י כִּי֩ מֶ֨לֶךְ גָּד֜וֹל אָ֗נִי אָמַר֙ יְהוָ֣ה צְבָא֔וֹת וּשְׁמִ֖י נוֹרָ֥א בַגּוֹיִֽם׃'
    ],
    [
      'וְעַתָּ֗ה אֲלֵיכֶ֛ם הַמִּצְוָ֥ה הַזֹּ֖את הַכֹּהֲנִֽים׃',
      'אִם־לֹ֣א תִשְׁמְע֡וּ וְאִם־לֹא֩ תָשִׂ֨ימוּ עַל־לֵ֜ב לָתֵ֧ת כָּב֣וֹד לִשְׁמִ֗י אָמַר֙ יְהוָ֣ה צְבָא֔וֹת וְשִׁלַּחְתִּ֤י בָכֶם֙ אֶת־הַמְּאֵרָ֔ה וְאָרוֹתִ֖י אֶת־בִּרְכֽוֹתֵיכֶ֑ם וְגַם֙ אָרוֹתִ֔יהָ כִּ֥י אֵינְכֶ֖ם שָׂמִ֥ים עַל־לֵֽב׃',
      'הִנְנִ֨י גֹעֵ֤ר לָכֶם֙ אֶת־הַזֶּ֔רַע וְזֵרִ֤יתִי פֶ֙רֶשׁ֙ עַל־פְּנֵיכֶ֔ם פֶּ֖רֶשׁ חַגֵּיכֶ֑ם וְנָשָׂ֥א אֶתְכֶ֖ם אֵלָֽיו׃',
      'וִֽידַעְתֶּ֕ם כִּ֚י שִׁלַּ֣חְתִּי אֲלֵיכֶ֔ם אֵ֖ת הַמִּצְוָ֣ה הַזֹּ֑את לִֽהְי֤וֹת בְּרִיתִי֙ אֶת־לֵוִ֔י אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'בְּרִיתִ֣י ׀ הָיְתָ֣ה אִתּ֗וֹ הַֽחַיִּים֙ וְהַ֨שָּׁל֔וֹם וָאֶתְּנֵֽם־ל֥וֹ מוֹרָ֖א וַיִּֽירָאֵ֑נִי וּמִפְּנֵ֥י שְׁמִ֖י נִחַ֥ת הֽוּא׃',
      'תּוֹרַ֤ת אֱמֶת֙ הָיְתָ֣ה בְּפִ֔יהוּ וְעַוְלָ֖ה לֹא־נִמְצָ֣א בִשְׂפָתָ֑יו בְּשָׁל֤וֹם וּבְמִישׁוֹר֙ הָלַ֣ךְ אִתִּ֔י וְרַבִּ֖ים הֵשִׁ֥יב מֵעָוֺֽן׃',
      'כִּֽי־שִׂפְתֵ֤י כֹהֵן֙ יִשְׁמְרוּ־דַ֔עַת וְתוֹרָ֖ה יְבַקְשׁ֣וּ מִפִּ֑יהוּ כִּ֛י מַלְאַ֥ךְ יְהוָֽה־צְבָא֖וֹת הֽוּא׃',
      'וְאַתֶּם֙ סַרְתֶּ֣ם מִן־הַדֶּ֔רֶךְ הִכְשַׁלְתֶּ֥ם רַבִּ֖ים בַּתּוֹרָ֑ה שִֽׁחַתֶּם֙ בְּרִ֣ית הַלֵּוִ֔י אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'וְגַם־אֲנִ֞י נָתַ֧תִּי אֶתְכֶ֛ם נִבְזִ֥ים וּשְׁפָלִ֖ים לְכָל־הָעָ֑ם כְּפִ֗י אֲשֶׁ֤ר אֵֽינְכֶם֙ שֹׁמְרִ֣ים אֶת־דְּרָכַ֔י וְנֹשְׂאִ֥ים פָּנִ֖ים בַּתּוֹרָֽה׃ (פ)',
      'הֲל֨וֹא אָ֤ב אֶחָד֙ לְכֻלָּ֔נוּ הֲל֛וֹא אֵ֥ל אֶֽחָ֖ד בְּרָאָ֑נוּ מַדּ֗וּעַ נִבְגַּד֙ אִ֣ישׁ בְּאָחִ֔יו לְחַלֵּ֖ל בְּרִ֥ית אֲבֹתֵֽינוּ׃',
      'בָּגְדָ֣ה יְהוּדָ֔ה וְתוֹעֵבָ֛ה נֶעֶשְׂתָ֥ה בְיִשְׂרָאֵ֖ל וּבִירֽוּשָׁלִָ֑ם כִּ֣י ׀ חִלֵּ֣ל יְהוּדָ֗ה קֹ֤דֶשׁ יְהוָה֙ אֲשֶׁ֣ר אָהֵ֔ב וּבָעַ֖ל בַּת־אֵ֥ל נֵכָֽר׃',
      'יַכְרֵ֨ת יְהוָ֜ה לָאִ֨ישׁ אֲשֶׁ֤ר יַעֲשֶׂ֙נָּה֙ עֵ֣ר וְעֹנֶ֔ה מֵאָהֳלֵ֖י יַֽעֲקֹ֑ב וּמַגִּ֣ישׁ מִנְחָ֔ה לַֽיהוָ֖ה צְבָאֽוֹת׃ (פ)',
      'וְזֹאת֙ שֵׁנִ֣ית תַּֽעֲשׂ֔וּ כַּסּ֤וֹת דִּמְעָה֙ אֶת־מִזְבַּ֣ח יְהוָ֔ה בְּכִ֖י וַֽאֲנָקָ֑ה מֵאֵ֣ין ע֗וֹד פְּנוֹת֙ אֶל־הַמִּנְחָ֔ה וְלָקַ֥חַת רָצ֖וֹן מִיֶּדְכֶֽם׃',
      'וַאֲמַרְתֶּ֖ם עַל־מָ֑ה עַ֡ל כִּי־יְהוָה֩ הֵעִ֨יד בֵּינְךָ֜ וּבֵ֣ין ׀ אֵ֣שֶׁת נְעוּרֶ֗יךָ אֲשֶׁ֤ר אַתָּה֙ בָּגַ֣דְתָּה בָּ֔הּ וְהִ֥יא חֲבֶרְתְּךָ֖ וְאֵ֥שֶׁת בְּרִיתֶֽךָ׃',
      'וְלֹא־אֶחָ֣ד עָשָׂ֗ה וּשְׁאָ֥ר ר֙וּחַ֙ ל֔וֹ וּמָה֙ הָֽאֶחָ֔ד מְבַקֵּ֖שׁ זֶ֣רַע אֱלֹהִ֑ים וְנִשְׁמַרְתֶּם֙ בְּר֣וּחֲכֶ֔ם וּבְאֵ֥שֶׁת נְעוּרֶ֖יךָ אַל־יִבְגֹּֽד׃',
      'כִּֽי־שָׂנֵ֣א שַׁלַּ֗ח אָמַ֤ר יְהוָה֙ אֱלֹהֵ֣י יִשְׂרָאֵ֔ל וְכִסָּ֤ה חָמָס֙ עַל־לְבוּשׁ֔וֹ אָמַ֖ר יְהוָ֣ה צְבָא֑וֹת וְנִשְׁמַרְתֶּ֥ם בְּרוּחֲכֶ֖ם וְלֹ֥א תִבְגֹּֽדוּ׃ (ס)',
      'הוֹגַעְתֶּ֤ם יְהוָה֙ בְּדִבְרֵיכֶ֔ם וַאֲמַרְתֶּ֖ם בַּמָּ֣ה הוֹגָ֑עְנוּ בֶּאֱמָרְכֶ֗ם כָּל־עֹ֨שֵׂה רָ֜ע ט֣וֹב ׀ בְּעֵינֵ֣י יְהוָ֗ה וּבָהֶם֙ ה֣וּא חָפֵ֔ץ א֥וֹ אַיֵּ֖ה אֱלֹהֵ֥י הַמִּשְׁפָּֽט׃'
    ],
    [
      'הִנְנִ֤י שֹׁלֵחַ֙ מַלְאָכִ֔י וּפִנָּה־דֶ֖רֶךְ לְפָנָ֑י וּפִתְאֹם֩ יָב֨וֹא אֶל־הֵיכָל֜וֹ הָאָד֣וֹן ׀ אֲשֶׁר־אַתֶּ֣ם מְבַקְשִׁ֗ים וּמַלְאַ֨ךְ הַבְּרִ֜ית אֲשֶׁר־אַתֶּ֤ם חֲפֵצִים֙ הִנֵּה־בָ֔א אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'וּמִ֤י מְכַלְכֵּל֙ אֶת־י֣וֹם בּוֹא֔וֹ וּמִ֥י הָעֹמֵ֖ד בְּהֵרָֽאוֹת֑וֹ כִּֽי־הוּא֙ כְּאֵ֣שׁ מְצָרֵ֔ף וּכְבֹרִ֖ית מְכַבְּסִֽים׃',
      'וְיָשַׁ֨ב מְצָרֵ֤ף וּמְטַהֵר֙ כֶּ֔סֶף וְטִהַ֤ר אֶת־בְּנֵֽי־לֵוִי֙ וְזִקַּ֣ק אֹתָ֔ם כַּזָּהָ֖ב וְכַכָּ֑סֶף וְהָיוּ֙ לַֽיהוָ֔ה מַגִּישֵׁ֥י מִנְחָ֖ה בִּצְדָקָֽה׃',
      'וְעָֽרְבָה֙ לַֽיהוָ֔ה מִנְחַ֥ת יְהוּדָ֖ה וִירֽוּשָׁלִָ֑ם כִּימֵ֣י עוֹלָ֔ם וּכְשָׁנִ֖ים קַדְמֹנִיּֽוֹת׃',
      'וְקָרַבְתִּ֣י אֲלֵיכֶם֮ לַמִּשְׁפָּט֒ וְהָיִ֣יתִי ׀ עֵ֣ד מְמַהֵ֗ר בַּֽמְכַשְּׁפִים֙ וּבַמְנָ֣אֲפִ֔ים וּבַנִּשְׁבָּעִ֖ים לַשָּׁ֑קֶר וּבְעֹשְׁקֵ֣י שְׂכַר־שָׂ֠כִיר אַלְמָנָ֨ה וְיָת֤וֹם וּמַטֵּי־גֵר֙ וְלֹ֣א יְרֵא֔וּנִי אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'כִּ֛י אֲנִ֥י יְהוָ֖ה לֹ֣א שָׁנִ֑יתִי וְאַתֶּ֥ם בְּנֵֽי־יַעֲקֹ֖ב לֹ֥א כְלִיתֶֽם׃',
      'לְמִימֵ֨י אֲבֹתֵיכֶ֜ם סַרְתֶּ֤ם מֵֽחֻקַּי֙ וְלֹ֣א שְׁמַרְתֶּ֔ם שׁ֤וּבוּ אֵלַי֙ וְאָשׁ֣וּבָה אֲלֵיכֶ֔ם אָמַ֖ר יְהוָ֣ה צְבָא֑וֹת וַאֲמַרְתֶּ֖ם בַּמֶּ֥ה נָשֽׁוּב׃',
      'הֲיִקְבַּ֨ע אָדָ֜ם אֱלֹהִ֗ים כִּ֤י אַתֶּם֙ קֹבְעִ֣ים אֹתִ֔י וַאֲמַרְתֶּ֖ם בַּמֶּ֣ה קְבַעֲנ֑וּךָ הַֽמַּעֲשֵׂ֖ר וְהַתְּרוּמָֽה׃',
      'בַּמְּאֵרָה֙ אַתֶּ֣ם נֵֽאָרִ֔ים וְאֹתִ֖י אַתֶּ֣ם קֹבְעִ֑ים הַגּ֖וֹי כֻּלּֽוֹ׃',
      'הָבִ֨יאוּ אֶת־כָּל־הַֽמַּעֲשֵׂ֜ר אֶל־בֵּ֣ית הָאוֹצָ֗ר וִיהִ֥י טֶ֙רֶף֙ בְּבֵיתִ֔י וּבְחָנ֤וּנִי נָא֙ בָּזֹ֔את אָמַ֖ר יְהוָ֣ה צְבָא֑וֹת אִם־לֹ֧א אֶפְתַּ֣ח לָכֶ֗ם אֵ֚ת אֲרֻבּ֣וֹת הַשָּׁמַ֔יִם וַהֲרִיקֹתִ֥י לָכֶ֛ם בְּרָכָ֖ה עַד־בְּלִי־דָֽי׃',
      'וְגָעַרְתִּ֤י לָכֶם֙ בָּֽאֹכֵ֔ל וְלֹֽא־יַשְׁחִ֥ת לָכֶ֖ם אֶת־פְּרִ֣י הָאֲדָמָ֑ה וְלֹא־תְשַׁכֵּ֨ל לָכֶ֤ם הַגֶּ֙פֶן֙ בַּשָּׂדֶ֔ה אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃',
      'וְאִשְּׁר֥וּ אֶתְכֶ֖ם כָּל־הַגּוֹיִ֑ם כִּֽי־תִהְי֤וּ אַתֶּם֙ אֶ֣רֶץ חֵ֔פֶץ אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃ (ס)',
      'חָזְק֥וּ עָלַ֛י דִּבְרֵיכֶ֖ם אָמַ֣ר יְהוָ֑ה וַאֲמַרְתֶּ֕ם מַה־נִּדְבַּ֖רְנוּ עָלֶֽיךָ׃',
      'אֲמַרְתֶּ֕ם שָׁ֖וְא עֲבֹ֣ד אֱלֹהִ֑ים וּמַה־בֶּ֗צַע כִּ֤י שָׁמַ֙רְנוּ֙ מִשְׁמַרְתּ֔וֹ וְכִ֤י הָלַ֙כְנוּ֙ קְדֹ֣רַנִּ֔ית מִפְּנֵ֖י יְהוָ֥ה צְבָאֽוֹת׃',
      'וְעַתָּ֕ה אֲנַ֖חְנוּ מְאַשְּׁרִ֣ים זֵדִ֑ים גַּם־נִבְנוּ֙ עֹשֵׂ֣י רִשְׁעָ֔ה גַּ֧ם בָּחֲנ֛וּ אֱלֹהִ֖ים וַיִּמָּלֵֽטוּ׃',
      'אָ֧ז נִדְבְּר֛וּ יִרְאֵ֥י יְהוָ֖ה אִ֣ישׁ אֶת־רֵעֵ֑הוּ וַיַּקְשֵׁ֤ב יְהוָה֙ וַיִּשְׁמָ֔ע וַ֠יִּכָּתֵב סֵ֣פֶר זִכָּר֤וֹן לְפָנָיו֙ לְיִרְאֵ֣י יְהוָ֔ה וּלְחֹשְׁבֵ֖י שְׁמֽוֹ׃',
      'וְהָ֣יוּ לִ֗י אָמַר֙ יְהוָ֣ה צְבָא֔וֹת לַיּ֕וֹם אֲשֶׁ֥ר אֲנִ֖י עֹשֶׂ֣ה סְגֻלָּ֑ה וְחָמַלְתִּ֣י עֲלֵיהֶ֔ם כַּֽאֲשֶׁר֙ יַחְמֹ֣ל אִ֔ישׁ עַל־בְּנ֖וֹ הָעֹבֵ֥ד אֹתֽוֹ׃',
      'וְשַׁבְתֶּם֙ וּרְאִיתֶ֔ם בֵּ֥ין צַדִּ֖יק לְרָשָׁ֑ע בֵּ֚ין עֹבֵ֣ד אֱלֹהִ֔ים לַאֲשֶׁ֖ר לֹ֥א עֲבָדֽוֹ׃ (ס)',
      'כִּֽי־הִנֵּ֤ה הַיּוֹם֙ בָּ֔א בֹּעֵ֖ר כַּתַּנּ֑וּר וְהָי֨וּ כָל־זֵדִ֜ים וְכָל־עֹשֵׂ֤ה רִשְׁעָה֙ קַ֔שׁ וְלִהַ֨ט אֹתָ֜ם הַיּ֣וֹם הַבָּ֗א אָמַר֙ יְהוָ֣ה צְבָא֔וֹת אֲשֶׁ֛ר לֹא־יַעֲזֹ֥ב לָהֶ֖ם שֹׁ֥רֶשׁ וְעָנָֽף׃',
      'וְזָרְחָ֨ה לָכֶ֜ם יִרְאֵ֤י שְׁמִי֙ שֶׁ֣מֶשׁ צְדָקָ֔ה וּמַרְפֵּ֖א בִּכְנָפֶ֑יהָ וִֽיצָאתֶ֥ם וּפִשְׁתֶּ֖ם כְּעֶגְלֵ֥י מַרְבֵּֽק׃',
      'וְעַסּוֹתֶ֣ם רְשָׁעִ֔ים כִּֽי־יִהְי֣וּ אֵ֔פֶר תַּ֖חַת כַּפּ֣וֹת רַגְלֵיכֶ֑ם בַּיּוֹם֙ אֲשֶׁ֣ר אֲנִ֣י עֹשֶׂ֔ה אָמַ֖ר יְהוָ֥ה צְבָאֽוֹת׃ (פ)',
      'זִכְר֕וּ תּוֹרַ֖ת מֹשֶׁ֣ה עַבְדִּ֑י אֲשֶׁר֩ צִוִּ֨יתִי אוֹת֤וֹ בְחֹרֵב֙ עַל־כָּל־יִשְׂרָאֵ֔ל חֻקִּ֖ים וּמִשְׁפָּטִֽים׃',
      'הִנֵּ֤ה אָֽנֹכִי֙ שֹׁלֵ֣חַ לָכֶ֔ם אֵ֖ת אֵלִיָּ֣ה הַנָּבִ֑יא לִפְנֵ֗י בּ֚וֹא י֣וֹם יְהוָ֔ה הַגָּד֖וֹל וְהַנּוֹרָֽא׃',
      'וְהֵשִׁ֤יב לֵב־אָבוֹת֙ עַל־בָּנִ֔ים וְלֵ֥ב בָּנִ֖ים עַל־אֲבוֹתָ֑ם פֶּן־אָב֕וֹא וְהִכֵּיתִ֥י אֶת־הָאָ֖רֶץ חֵֽרֶם׃<br><small>[הנה אנכי שלח לכם את אליה הנביא לפני בוא יום יהוה הגדול והנורא]</small>'
    ]
  ],
  plain: [
    [
      'משא דבר־יהוה אל־ישראל ביד מלאכי',
      'אהבתי אתכם אמר יהוה ואמרתם במה אהבתנו הלוא־אח עשו ליעקב נאם־יהוה ואהב את־יעקב',
      'ואת־עשו שנאתי ואשים את־הריו שממה ואת־נחלתו לתנות מדבר',
      'כי־תאמר אדום רששנו ונשוב ונבנה חרבות כה אמר יהוה צבאות המה יבנו ואני אהרוס וקראו להם גבול רשעה והעם אשר־זעם יהוה עד־עולם',
      'ועיניכם תראינה ואתם תאמרו יגדל יהוה מעל לגבול ישראל',
      'בן יכבד אב ועבד אדניו ואם־אב אני איה כבודי ואם־אדונים אני איה מוראי אמר יהוה צבאות לכם הכהנים בוזי שמי ואמרתם במה בזינו את־שמך',
      'מגישים על־מזבחי לחם מגאל ואמרתם במה גאלנוך באמרכם שלחן יהוה נבזה הוא',
      'וכי־תגשון עור לזבח אין רע וכי תגישו פסח וחלה אין רע הקריבהו נא לפחתך הירצך או הישא פניך אמר יהוה צבאות',
      'ועתה חלו־נא פני־אל ויחננו מידכם היתה זאת הישא מכם פנים אמר יהוה צבאות',
      'מי גם־בכם ויסגר דלתים ולא־תאירו מזבחי חנם אין־לי חפץ בכם אמר יהוה צבאות ומנחה לא־ארצה מידכם',
      'כי ממזרח־שמש ועד־מבואו גדול שמי בגוים ובכל־מקום מקטר מגש לשמי ומנחה טהורה כי־גדול שמי בגוים אמר יהוה צבאות',
      'ואתם מחללים אותו באמרכם שלחן אדני מגאל הוא וניבו נבזה אכלו',
      'ואמרתם הנה מתלאה והפחתם אותו אמר יהוה צבאות והבאתם גזול ואת־הפסח ואת־החולה והבאתם את־המנחה הארצה אותה מידכם אמר יהוה',
      'וארור נוכל ויש בעדרו זכר ונדר וזבח משחת לאדני כי מלך גדול אני אמר יהוה צבאות ושמי נורא בגוים'
    ],
    [
      'ועתה אליכם המצוה הזאת הכהנים',
      'אם־לא תשמעו ואם־לא תשימו על־לב לתת כבוד לשמי אמר יהוה צבאות ושלחתי בכם את־המארה וארותי את־ברכותיכם וגם ארותיה כי אינכם שמים על־לב',
      'הנני גער לכם את־הזרע וזריתי פרש על־פניכם פרש חגיכם ונשא אתכם אליו',
      'וידעתם כי שלחתי אליכם את המצוה הזאת להיות בריתי את־לוי אמר יהוה צבאות',
      'בריתי היתה אתו החיים והשלום ואתנם־לו מורא וייראני ומפני שמי נחת הוא',
      'תורת אמת היתה בפיהו ועולה לא־נמצא בשפתיו בשלום ובמישור הלך אתי ורבים השיב מעון',
      'כי־שפתי כהן ישמרו־דעת ותורה יבקשו מפיהו כי מלאך יהוה־צבאות הוא',
      'ואתם סרתם מן־הדרך הכשלתם רבים בתורה שחתם ברית הלוי אמר יהוה צבאות',
      'וגם־אני נתתי אתכם נבזים ושפלים לכל־העם כפי אשר אינכם שמרים את־דרכי ונשאים פנים בתורה',
      'הלוא אב אחד לכלנו הלוא אל אחד בראנו מדוע נבגד איש באחיו לחלל ברית אבתינו',
      'בגדה יהודה ותועבה נעשתה בישראל ובירושלם כי חלל יהודה קדש יהוה אשר אהב ובעל בת־אל נכר',
      'יכרת יהוה לאיש אשר יעשנה ער וענה מאהלי יעקב ומגיש מנחה ליהוה צבאות',
      'וזאת שנית תעשו כסות דמעה את־מזבח יהוה בכי ואנקה מאין עוד פנות אל־המנחה ולקחת רצון מידכם',
      'ואמרתם על־מה על כי־יהוה העיד בינך ובין אשת נעוריך אשר אתה בגדתה בה והיא חברתך ואשת בריתך',
      'ולא־אחד עשה ושאר רוח לו ומה האחד מבקש זרע אלהים ונשמרתם ברוחכם ובאשת נעוריך אל־יבגד',
      'כי־שנא שלח אמר יהוה אלהי ישראל וכסה חמס על־לבושו אמר יהוה צבאות ונשמרתם ברוחכם ולא תבגדו',
      'הוגעתם יהוה בדבריכם ואמרתם במה הוגענו באמרכם כל־עשה רע טוב בעיני יהוה ובהם הוא חפץ או איה אלהי המשפט'
    ],
    [
      'הנני שלח מלאכי ופנה־דרך לפני ופתאם יבוא אל־היכלו האדון אשר־אתם מבקשים ומלאך הברית אשר־אתם חפצים הנה־בא אמר יהוה צבאות',
      'ומי מכלכל את־יום בואו ומי העמד בהראותו כי־הוא כאש מצרף וכברית מכבסים',
      'וישב מצרף ומטהר כסף וטהר את־בני־לוי וזקק אתם כזהב וככסף והיו ליהוה מגישי מנחה בצדקה',
      'וערבה ליהוה מנחת יהודה וירושלם כימי עולם וכשנים קדמניות',
      'וקרבתי אליכם למשפט והייתי עד ממהר במכשפים ובמנאפים ובנשבעים לשקר ובעשקי שכר־שכיר אלמנה ויתום ומטי־גר ולא יראוני אמר יהוה צבאות',
      'כי אני יהוה לא שניתי ואתם בני־יעקב לא כליתם',
      'למימי אבתיכם סרתם מחקי ולא שמרתם שובו אלי ואשובה אליכם אמר יהוה צבאות ואמרתם במה נשוב',
      'היקבע אדם אלהים כי אתם קבעים אתי ואמרתם במה קבענוך המעשר והתרומה',
      'במארה אתם נארים ואתי אתם קבעים הגוי כלו',
      'הביאו את־כל־המעשר אל־בית האוצר ויהי טרף בביתי ובחנוני נא בזאת אמר יהוה צבאות אם־לא אפתח לכם את ארבות השמים והריקתי לכם ברכה עד־בלי־די',
      'וגערתי לכם באכל ולא־ישחת לכם את־פרי האדמה ולא־תשכל לכם הגפן בשדה אמר יהוה צבאות',
      'ואשרו אתכם כל־הגוים כי־תהיו אתם ארץ חפץ אמר יהוה צבאות',
      'חזקו עלי דבריכם אמר יהוה ואמרתם מה־נדברנו עליך',
      'אמרתם שוא עבד אלהים ומה־בצע כי שמרנו משמרתו וכי הלכנו קדרנית מפני יהוה צבאות',
      'ועתה אנחנו מאשרים זדים גם־נבנו עשי רשעה גם בחנו אלהים וימלטו',
      'אז נדברו יראי יהוה איש את־רעהו ויקשב יהוה וישמע ויכתב ספר זכרון לפניו ליראי יהוה ולחשבי שמו',
      'והיו לי אמר יהוה צבאות ליום אשר אני עשה סגלה וחמלתי עליהם כאשר יחמל איש על־בנו העבד אתו',
      'ושבתם וראיתם בין צדיק לרשע בין עבד אלהים לאשר לא עבדו',
      'כי־הנה היום בא בער כתנור והיו כל־זדים וכל־עשה רשעה קש ולהט אתם היום הבא אמר יהוה צבאות אשר לא־יעזב להם שרש וענף',
      'וזרחה לכם יראי שמי שמש צדקה ומרפא בכנפיה ויצאתם ופשתם כעגלי מרבק',
      'ועסותם רשעים כי־יהיו אפר תחת כפות רגליכם ביום אשר אני עשה אמר יהוה צבאות',
      'זכרו תורת משה עבדי אשר צויתי אותו בחרב על־כל־ישראל חקים ומשפטים',
      'הנה אנכי שלח לכם את אליה הנביא לפני בוא יום יהוה הגדול והנורא',
      'והשיב לב־אבות על־בנים ולב בנים על־אבותם פן־אבוא והכיתי את־הארץ חרם<br><small>[הנה אנכי שלח לכם את אליה הנביא לפני בוא יום יהוה הגדול והנורא]</small>'
    ]
  ]
};

export const malachi: Book = (version: string = 'niqqud') => {
  return {
    title: 'malachi',
    heTitle: 'מלאכי',
    version,
    text: versions[version]
  };
};
