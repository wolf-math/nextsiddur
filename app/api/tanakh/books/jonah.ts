import { Book } from './interfaces';

const versions: Record<string, string[][]> = {
  text: [
    [
      'וַיְהִי דְּבַר־יְהוָה אֶל־יוֹנָה בֶן־אֲמִתַּי לֵאמֹר׃',
      'קוּם לֵךְ אֶל־נִינְוֵה הָעִיר הַגְּדוֹלָה וּקְרָא עָלֶיהָ כִּי־עָלְתָה רָעָתָם לְפָנָי׃',
      'וַיָּקָם יוֹנָה לִבְרֹחַ תַּרְשִׁישָׁה מִלִּפְנֵי יְהוָה וַיֵּרֶד יָפוֹ וַיִּמְצָא אָנִיָּה בָּאָה תַרְשִׁישׁ וַיִּתֵּן שְׂכָרָהּ וַיֵּרֶד בָּהּ לָבוֹא עִמָּהֶם תַּרְשִׁישָׁה מִלִּפְנֵי יְהוָה׃',
      'וַיהוָה הֵטִיל רוּחַ־גְּדוֹלָה אֶל־הַיָּם וַיְהִי סַעַר־גָּדוֹל בַּיָּם וְהָאֳנִיָּה חִשְּׁבָה לְהִשָּׁבֵר׃',
      'וַיִּירְאוּ הַמַּלָּחִים וַיִּזְעֲקוּ אִישׁ אֶל־אֱלֹהָיו וַיָּטִלוּ אֶת־הַכֵּלִים אֲשֶׁר בָּאֳנִיָּה אֶל־הַיָּם לְהָקֵל מֵעֲלֵיהֶם וְיוֹנָה יָרַד אֶל־יַרְכְּתֵי הַסְּפִינָה וַיִּשְׁכַּב וַיֵּרָדַם׃',
      'וַיִּקְרַב אֵלָיו רַב הַחֹבֵל וַיֹּאמֶר לוֹ מַה־לְּךָ נִרְדָּם קוּם קְרָא אֶל־אֱלֹהֶיךָ אוּלַי יִתְעַשֵּׁת הָאֱלֹהִים לָנוּ וְלֹא נֹאבֵד׃',
      'וַיֹּאמְרוּ אִישׁ אֶל־רֵעֵהוּ לְכוּ וְנַפִּילָה גוֹרָלוֹת וְנֵדְעָה בְּשֶׁלְּמִי הָרָעָה הַזֹּאת לָנוּ וַיַּפִּלוּ גּוֹרָלוֹת וַיִּפֹּל הַגּוֹרָל עַל־יוֹנָה׃',
      'וַיֹּאמְרוּ אֵלָיו הַגִּידָה־נָּא לָנוּ בַּאֲשֶׁר לְמִי־הָרָעָה הַזֹּאת לָנוּ מַה־מְּלַאכְתְּךָ וּמֵאַיִן תָּבוֹא מָה אַרְצֶךָ וְאֵי־מִזֶּה עַם אָתָּה׃',
      'וַיֹּאמֶר אֲלֵיהֶם עִבְרִי אָנֹכִי וְאֶת־יְהוָה אֱלֹהֵי הַשָּׁמַיִם אֲנִי יָרֵא אֲשֶׁר־עָשָׂה אֶת־הַיָּם וְאֶת־הַיַּבָּשָׁה׃',
      'וַיִּירְאוּ הָאֲנָשִׁים יִרְאָה גְדוֹלָה וַיֹּאמְרוּ אֵלָיו מַה־זֹּאת עָשִׂיתָ כִּי־יָדְעוּ הָאֲנָשִׁים כִּי־מִלִּפְנֵי יְהוָה הוּא בֹרֵחַ כִּי הִגִּיד לָהֶם׃',
      'וַיֹּאמְרוּ אֵלָיו מַה־נַּעֲשֶׂה לָּךְ וְיִשְׁתֹּק הַיָּם מֵעָלֵינוּ כִּי הַיָּם הוֹלֵךְ וְסֹעֵר׃',
      'וַיֹּאמֶר אֲלֵיהֶם שָׂאוּנִי וַהֲטִילֻנִי אֶל־הַיָּם וְיִשְׁתֹּק הַיָּם מֵעֲלֵיכֶם כִּי יוֹדֵעַ אָנִי כִּי בְשֶׁלִּי הַסַּעַר הַגָּדוֹל הַזֶּה עֲלֵיכֶם׃',
      'וַיַּחְתְּרוּ הָאֲנָשִׁים לְהָשִׁיב אֶל־הַיַּבָּשָׁה וְלֹא יָכֹלוּ כִּי הַיָּם הוֹלֵךְ וְסֹעֵר עֲלֵיהֶם׃',
      'וַיִּקְרְאוּ אֶל־יְהוָה וַיֹּאמְרוּ אָנָּה יְהוָה אַל־נָא נֹאבְדָה בְּנֶפֶשׁ הָאִישׁ הַזֶּה וְאַל־תִּתֵּן עָלֵינוּ דָּם נָקִיא כִּי־אַתָּה יְהוָה כַּאֲשֶׁר חָפַצְתָּ עָשִׂיתָ׃',
      'וַיִּשְׂאוּ אֶת־יוֹנָה וַיְטִלֻהוּ אֶל־הַיָּם וַיַּעֲמֹד הַיָּם מִזַּעְפּוֹ׃',
      'וַיִּירְאוּ הָאֲנָשִׁים יִרְאָה גְדוֹלָה אֶת־יְהוָה וַיִּזְבְּחוּ־זֶבַח לַיהוָה וַיִּדְּרוּ נְדָרִים׃'
    ],
    [
      'וַיְמַן יְהוָה דָּג גָּדוֹל לִבְלֹעַ אֶת־יוֹנָה וַיְהִי יוֹנָה בִּמְעֵי הַדָּג שְׁלֹשָׁה יָמִים וּשְׁלֹשָׁה לֵילוֹת׃',
      'וַיִּתְפַּלֵּל יוֹנָה אֶל־יְהוָה אֱלֹהָיו מִמְּעֵי הַדָּגָה׃',
      'וַיֹּאמֶר קָרָאתִי מִצָּרָה לִי אֶל־יְהוָה וַיַּעֲנֵנִי מִבֶּטֶן שְׁאוֹל שִׁוַּעְתִּי שָׁמַעְתָּ קוֹלִי׃',
      'וַתַּשְׁלִיכֵנִי מְצוּלָה בִּלְבַב יַמִּים וְנָהָר יְסֹבְבֵנִי כָּל־מִשְׁבָּרֶיךָ וְגַלֶּיךָ עָלַי עָבָרוּ׃',
      'וַאֲנִי אָמַרְתִּי נִגְרַשְׁתִּי מִנֶּגֶד עֵינֶיךָ אַךְ אוֹסִיף לְהַבִּיט אֶל־הֵיכַל קָדְשֶׁךָ׃',
      'אֲפָפוּנִי מַיִם עַד־נֶפֶשׁ תְּהוֹם יְסֹבְבֵנִי סוּף חָבוּשׁ לְרֹאשִׁי׃',
      'לְקִצְבֵי הָרִים יָרַדְתִּי הָאָרֶץ בְּרִחֶיהָ בַעֲדִי לְעוֹלָם וַתַּעַל מִשַּׁחַת חַיַּי יְהוָה אֱלֹהָי׃',
      'בְּהִתְעַטֵּף עָלַי נַפְשִׁי אֶת־יְהוָה זָכָרְתִּי וַתָּבוֹא אֵלֶיךָ תְּפִלָּתִי אֶל־הֵיכַל קָדְשֶׁךָ׃',
      'מְשַׁמְּרִים הַבְלֵי־שָׁוְא חַסְדָּם יַעֲזֹבוּ׃',
      'וַאֲנִי בְּקוֹל תּוֹדָה אֶזְבְּחָה־לָּךְ אֲשֶׁר נָדַרְתִּי אֲשַׁלֵּמָה יְשׁוּעָתָה לַיהוָה׃',
      'וַיֹּאמֶר יְהוָה לַדָּג וַיָּקֵא אֶת־יוֹנָה אֶל־הַיַּבָּשָׁה׃'
    ],
    [
      'וַיְהִי דְבַר־יְהוָה אֶל־יוֹנָה שֵׁנִית לֵאמֹר׃',
      'קוּם לֵךְ אֶל־נִינְוֵה הָעִיר הַגְּדוֹלָה וִּקְרָא אֵלֶיהָ אֶת־הַקְּרִיאָה אֲשֶׁר אָנֹכִי דֹּבֵר אֵלֶיךָ׃',
      'וַיָּקָם יוֹנָה וַיֵּלֶךְ אֶל־נִינְוֶה כִּדְבַר יְהוָה וְנִינְוֵה הָיְתָה עִיר־גְּדוֹלָה לֵאלֹהִים מַהֲלַךְ שְׁלֹשֶׁת יָמִים׃',
      'וַיָּחֶל יוֹנָה לָבוֹא בָעִיר מַהֲלַךְ יוֹם אֶחָד וַיִּקְרָא וַיֹּאמַר עוֹד אַרְבָּעִים יוֹם וְנִינְוֵה נֶהְפָּכֶת׃',
      'וַיַּאֲמִינוּ אַנְשֵׁי נִינְוֵה בֵּאלֹהִים וַיִּקְרְאוּ־צוֹם וַיִּלְבְּשׁוּ שַׂקִּים מִגְּדוֹלָם וְעַד־קְטַנָּם׃',
      'וַיִּגַּע הַדָּבָר אֶל־מֶלֶך נִינְוֵה וַיָּקָם מִכִּסְאוֹ וַיַּעֲבֵר אַדַּרְתּוֹ מֵעָלָיו וַיְכַס שַׂק וַיֵּשֶׁב עַל־הָאֵפֶר׃',
      'וַיַּזְעֵק וַיֹּאמֶר בְּנִינְוֵה מִטַּעַם הַמֶּלֶךְ וּגְדֹלָיו לֵאמֹר הָאָדָם וְהַבְּהֵמָה הַבָּקָר וְהַצֹּאן אַל־יִטְעֲמוּ מְאוּמָה אַל־יִרְעוּ וּמַיִם אַל־יִשְׁתּוּ׃',
      'וְיִתְכַּסּוּ שַׂקִּים הָאָדָם וְהַבְּהֵמָה וְיִקְרְאוּ אֶל־אֱלֹהִים בְּחָזְקָה וְיָשֻׁבוּ אִישׁ מִדַּרְכּוֹ הָרָעָה וּמִן־הֶחָמָס אֲשֶׁר בְּכַפֵּיהֶם׃',
      'מִי־יוֹדֵעַ יָשׁוּב וְנִחַם הָאֱלֹהִים וְשָׁב מֵחֲרוֹן אַפּוֹ וְלֹא נֹאבֵד׃',
      'וַיַּרְא הָאֱלֹהִים אֶת־מַעֲשֵׂיהֶם כִּי־שָׁבוּ מִדַּרְכָּם הָרָעָה וַיִּנָּחֶם הָאֱלֹהִים עַל־הָרָעָה אֲשֶׁר־דִּבֶּר לַעֲשׂוֹת־לָהֶם וְלֹא עָשָׂה׃'
    ],
    [
      'וַיֵּרַע אֶל־יוֹנָה רָעָה גְדוֹלָה וַיִּחַר לוֹ׃',
      'וַיִּתְפַּלֵּל אֶל־יְהוָה וַיֹּאמַר אָנָּה יְהוָה הֲלוֹא־זֶה דְבָרִי עַד־הֱיוֹתִי עַל־אַדְמָתִי עַל־כֵּן קִדַּמְתִּי לִבְרֹחַ תַּרְשִׁישָׁה כִּי יָדַעְתִּי כִּי אַתָּה אֵל־חַנּוּן וְרַחוּם אֶרֶךְ אַפַּיִם וְרַב־חֶסֶד וְנִחָם עַל־הָרָעָה׃',
      'וְעַתָּה יְהוָה קַח־נָא אֶת־נַפְשִׁי מִמֶּנִּי כִּי טוֹב מוֹתִי מֵחַיָּי׃',
      'וַיֹּאמֶר יְהוָה הַהֵיטֵב חָרָה לָךְ׃',
      'וַיֵּצֵא יוֹנָה מִן־הָעִיר וַיֵּשֶׁב מִקֶּדֶם לָעִיר וַיַּעַשׂ לוֹ שָׁם סֻכָּה וַיֵּשֶׁב תַּחְתֶּיהָ בַּצֵּל עַד אֲשֶׁר יִרְאֶה מַה־יִּהְיֶה בָּעִיר׃',
      'וַיְמַן יְהוָה־אֱלֹהִים קִיקָיוֹן וַיַּעַל מֵעַל לְיוֹנָה לִהְיוֹת צֵל עַל־רֹאשׁוֹ לְהַצִּיל לוֹ מֵרָעָתוֹ וַיִּשְׂמַח יוֹנָה עַל־הַקִּיקָיוֹן שִׂמְחָה גְדוֹלָה׃',
      'וַיְמַן הָאֱלֹהִים תּוֹלַעַת בַּעֲלוֹת הַשַּׁחַר לַמָּחֳרָת וַתַּךְ אֶת־הַקִּיקָיוֹן וַיִּיבָשׁ׃',
      'וַיְהִי כִּזְרֹחַ הַשֶּׁמֶשׁ וַיְמַן אֱלֹהִים רוּחַ קָדִים חֲרִישִׁית וַתַּךְ הַשֶּׁמֶשׁ עַל־רֹאשׁ יוֹנָה וַיִּתְעַלָּף וַיִּשְׁאַל אֶת־נַפְשׁוֹ לָמוּת וַיֹּאמֶר טוֹב מוֹתִי מֵחַיָּי׃',
      'וַיֹּאמֶר אֱלֹהִים אֶל־יוֹנָה הַהֵיטֵב חָרָה־לְךָ עַל־הַקִּיקָיוֹן וַיֹּאמֶר הֵיטֵב חָרָה־לִי עַד־מָוֶת׃',
      'וַיֹּאמֶר יְהוָה אַתָּה חַסְתָּ עַל־הַקִּיקָיוֹן אֲשֶׁר לֹא־עָמַלְתָּ בּוֹ וְלֹא גִדַּלְתּוֹ שֶׁבִּן־לַיְלָה הָיָה וּבִן־לַיְלָה אָבָד׃',
      'וַאֲנִי לֹא אָחוּס עַל־נִינְוֵה הָעִיר הַגְּדוֹלָה אֲשֶׁר יֶשׁ־בָּהּ הַרְבֵּה מִשְׁתֵּים־עֶשְׂרֵה רִבּוֹ אָדָם אֲשֶׁר לֹא־יָדַע בֵּין־יְמִינוֹ לִשְׂמֹאלוֹ וּבְהֵמָה רַבָּה׃'
    ]
  ],
  taameiHaMiqra: [
    [
      'וַֽיְהִי֙ דְּבַר־יְהוָ֔ה אֶל־יוֹנָ֥ה בֶן־אֲמִתַּ֖י לֵאמֹֽר׃',
      'ק֠וּם לֵ֧ךְ אֶל־נִֽינְוֵ֛ה הָעִ֥יר הַגְּדוֹלָ֖ה וּקְרָ֣א עָלֶ֑יהָ כִּֽי־עָלְתָ֥ה רָעָתָ֖ם לְפָנָֽי׃',
      'וַיָּ֤קָם יוֹנָה֙ לִבְרֹ֣חַ תַּרְשִׁ֔ישָׁה מִלִּפְנֵ֖י יְהוָ֑ה וַיֵּ֨רֶד יָפ֜וֹ וַיִּמְצָ֥א אָנִיָּ֣ה ׀ בָּאָ֣ה תַרְשִׁ֗ישׁ וַיִּתֵּ֨ן שְׂכָרָ֜הּ וַיֵּ֤רֶד בָּהּ֙ לָב֤וֹא עִמָּהֶם֙ תַּרְשִׁ֔ישָׁה מִלִּפְנֵ֖י יְהוָֽה׃',
      'וַֽיהוָ֗ה הֵטִ֤יל רֽוּחַ־גְּדוֹלָה֙ אֶל־הַיָּ֔ם וַיְהִ֥י סַֽעַר־גָּד֖וֹל בַּיָּ֑ם וְהָ֣אֳנִיָּ֔ה חִשְּׁבָ֖ה לְהִשָּׁבֵֽר׃',
      'וַיִּֽירְא֣וּ הַמַּלָּחִ֗ים וַֽיִּזְעֲקוּ֮ אִ֣ישׁ אֶל־אֱלֹהָיו֒ וַיָּטִ֨לוּ אֶת־הַכֵּלִ֜ים אֲשֶׁ֤ר בָּֽאֳנִיָּה֙ אֶל־הַיָּ֔ם לְהָקֵ֖ל מֵֽעֲלֵיהֶ֑ם וְיוֹנָ֗ה יָרַד֙ אֶל־יַרְכְּתֵ֣י הַסְּפִינָ֔ה וַיִּשְׁכַּ֖ב וַיֵּרָדַֽם׃',
      'וַיִּקְרַ֤ב אֵלָיו֙ רַ֣ב הַחֹבֵ֔ל וַיֹּ֥אמֶר ל֖וֹ מַה־לְּךָ֣ נִרְדָּ֑ם ק֚וּם קְרָ֣א אֶל־אֱלֹהֶ֔יךָ אוּלַ֞י יִתְעַשֵּׁ֧ת הָאֱלֹהִ֛ים לָ֖נוּ וְלֹ֥א נֹאבֵֽד׃',
      'וַיֹּאמְר֞וּ אִ֣ישׁ אֶל־רֵעֵ֗הוּ לְכוּ֙ וְנַפִּ֣ילָה גֽוֹרָל֔וֹת וְנֵ֣דְעָ֔ה בְּשֶׁלְּמִ֛י הָרָעָ֥ה הַזֹּ֖את לָ֑נוּ וַיַּפִּ֙לוּ֙ גּֽוֹרָל֔וֹת וַיִּפֹּ֥ל הַגּוֹרָ֖ל עַל־יוֹנָֽה׃',
      'וַיֹּאמְר֣וּ אֵלָ֔יו הַגִּידָה־נָּ֣א לָ֔נוּ בַּאֲשֶׁ֛ר לְמִי־הָרָעָ֥ה הַזֹּ֖את לָ֑נוּ מַה־מְּלַאכְתְּךָ֙ וּמֵאַ֣יִן תָּב֔וֹא מָ֣ה אַרְצֶ֔ךָ וְאֵֽי־מִזֶּ֥ה עַ֖ם אָֽתָּה׃',
      'וַיֹּ֥אמֶר אֲלֵיהֶ֖ם עִבְרִ֣י אָנֹ֑כִי וְאֶת־יְהוָ֞ה אֱלֹהֵ֤י הַשָּׁמַ֙יִם֙ אֲנִ֣י יָרֵ֔א אֲשֶׁר־עָשָׂ֥ה אֶת־הַיָּ֖ם וְאֶת־הַיַּבָּשָֽׁה׃',
      'וַיִּֽירְא֤וּ הָֽאֲנָשִׁים֙ יִרְאָ֣ה גְדוֹלָ֔ה וַיֹּאמְר֥וּ אֵלָ֖יו מַה־זֹּ֣את עָשִׂ֑יתָ כִּֽי־יָדְע֣וּ הָאֲנָשִׁ֗ים כִּֽי־מִלִּפְנֵ֤י יְהוָה֙ ה֣וּא בֹרֵ֔חַ כִּ֥י הִגִּ֖יד לָהֶֽם׃',
      'וַיֹּאמְר֤וּ אֵלָיו֙ מַה־נַּ֣עֲשֶׂה לָּ֔ךְ וְיִשְׁתֹּ֥ק הַיָּ֖ם מֵֽעָלֵ֑ינוּ כִּ֥י הַיָּ֖ם הוֹלֵ֥ךְ וְסֹעֵֽר׃',
      'וַיֹּ֣אמֶר אֲלֵיהֶ֗ם שָׂא֙וּנִי֙ וַהֲטִילֻ֣נִי אֶל־הַיָּ֔ם וְיִשְׁתֹּ֥ק הַיָּ֖ם מֵֽעֲלֵיכֶ֑ם כִּ֚י יוֹדֵ֣עַ אָ֔נִי כִּ֣י בְשֶׁלִּ֔י הַסַּ֧עַר הַגָּד֛וֹל הַזֶּ֖ה עֲלֵיכֶֽם׃',
      'וַיַּחְתְּר֣וּ הָאֲנָשִׁ֗ים לְהָשִׁ֛יב אֶל־הַיַּבָּשָׁ֖ה וְלֹ֣א יָכֹ֑לוּ כִּ֣י הַיָּ֔ם הוֹלֵ֥ךְ וְסֹעֵ֖ר עֲלֵיהֶֽם׃',
      'וַיִּקְרְא֨וּ אֶל־יְהוָ֜ה וַיֹּאמְר֗וּ אָנָּ֤ה יְהוָה֙ אַל־נָ֣א נֹאבְדָ֗ה בְּנֶ֙פֶשׁ֙ הָאִ֣ישׁ הַזֶּ֔ה וְאַל־תִּתֵּ֥ן עָלֵ֖ינוּ דָּ֣ם נָקִ֑יא כִּֽי־אַתָּ֣ה יְהוָ֔ה כַּאֲשֶׁ֥ר חָפַ֖צְתָּ עָשִֽׂיתָ׃',
      'וַיִּשְׂאוּ֙ אֶת־יוֹנָ֔ה וַיְטִלֻ֖הוּ אֶל־הַיָּ֑ם וַיַּעֲמֹ֥ד הַיָּ֖ם מִזַּעְפּֽוֹ׃',
      'וַיִּֽירְא֧וּ הָאֲנָשִׁ֛ים יִרְאָ֥ה גְדוֹלָ֖ה אֶת־יְהוָ֑ה וַיִּֽזְבְּחוּ־זֶ֙בַח֙ לַֽיהוָ֔ה וַֽיִּדְּר֖וּ נְדָרִֽים׃'
    ],
    [
      'וַיְמַ֤ן יְהוָה֙ דָּ֣ג גָּד֔וֹל לִבְלֹ֖עַ אֶת־יוֹנָ֑ה וַיְהִ֤י יוֹנָה֙ בִּמְעֵ֣י הַדָּ֔ג שְׁלֹשָׁ֥ה יָמִ֖ים וּשְׁלֹשָׁ֥ה לֵילֽוֹת׃',
      'וַיִּתְפַּלֵּ֣ל יוֹנָ֔ה אֶל־יְהוָ֖ה אֱלֹהָ֑יו מִמְּעֵ֖י הַדָּגָֽה׃',
      'וַיֹּ֗אמֶר קָ֠רָאתִי מִצָּ֥רָה לִ֛י אֶל־יְהוָ֖ה וַֽיַּעֲנֵ֑נִי מִבֶּ֧טֶן שְׁא֛וֹל שִׁוַּ֖עְתִּי שָׁמַ֥עְתָּ קוֹלִֽי׃',
      'וַתַּשְׁלִיכֵ֤נִי מְצוּלָה֙ בִּלְבַ֣ב יַמִּ֔ים וְנָהָ֖ר יְסֹבְבֵ֑נִי כָּל־מִשְׁבָּרֶ֥יךָ וְגַלֶּ֖יךָ עָלַ֥י עָבָֽרוּ׃',
      'וַאֲנִ֣י אָמַ֔רְתִּי נִגְרַ֖שְׁתִּי מִנֶּ֣גֶד עֵינֶ֑יךָ אַ֚ךְ אוֹסִ֣יף לְהַבִּ֔יט אֶל־הֵיכַ֖ל קָדְשֶֽׁךָ׃',
      'אֲפָפ֤וּנִי מַ֙יִם֙ עַד־נֶ֔פֶשׁ תְּה֖וֹם יְסֹבְבֵ֑נִי ס֖וּף חָב֥וּשׁ לְרֹאשִֽׁי׃',
      'לְקִצְבֵ֤י הָרִים֙ יָרַ֔דְתִּי הָאָ֛רֶץ בְּרִחֶ֥יהָ בַעֲדִ֖י לְעוֹלָ֑ם וַתַּ֧עַל מִשַּׁ֛חַת חַיַּ֖י יְהוָ֥ה אֱלֹהָֽי׃',
      'בְּהִתְעַטֵּ֤ף עָלַי֙ נַפְשִׁ֔י אֶת־יְהוָ֖ה זָכָ֑רְתִּי וַתָּב֤וֹא אֵלֶ֙יךָ֙ תְּפִלָּתִ֔י אֶל־הֵיכַ֖ל קָדְשֶֽׁךָ׃',
      'מְשַׁמְּרִ֖ים הַבְלֵי־שָׁ֑וְא חַסְדָּ֖ם יַעֲזֹֽבוּ׃',
      'וַאֲנִ֗י בְּק֤וֹל תּוֹדָה֙ אֶזְבְּחָה־לָּ֔ךְ אֲשֶׁ֥ר נָדַ֖רְתִּי אֲשַׁלֵּ֑מָה יְשׁוּעָ֖תָה לַיהוָֽה׃ (ס)',
      'וַיֹּ֥אמֶר יְהוָ֖ה לַדָּ֑ג וַיָּקֵ֥א אֶת־יוֹנָ֖ה אֶל־הַיַּבָּשָֽׁה׃ (פ)'
    ],
    [
      'וַיְהִ֧י דְבַר־יְהוָ֛ה אֶל־יוֹנָ֖ה שֵׁנִ֥ית לֵאמֹֽר׃',
      'ק֛וּם לֵ֥ךְ אֶל־נִֽינְוֵ֖ה הָעִ֣יר הַגְּדוֹלָ֑ה וִּקְרָ֤א אֵלֶ֙יהָ֙ אֶת־הַקְּרִיאָ֔ה אֲשֶׁ֥ר אָנֹכִ֖י דֹּבֵ֥ר אֵלֶֽיךָ׃',
      'וַיָּ֣קָם יוֹנָ֗ה וַיֵּ֛לֶךְ אֶל־נִֽינְוֶ֖ה כִּדְבַ֣ר יְהוָ֑ה וְנִֽינְוֵ֗ה הָיְתָ֤ה עִיר־גְּדוֹלָה֙ לֵֽאלֹהִ֔ים מַהֲלַ֖ךְ שְׁלֹ֥שֶׁת יָמִֽים׃',
      'וַיָּ֤חֶל יוֹנָה֙ לָב֣וֹא בָעִ֔יר מַהֲלַ֖ךְ י֣וֹם אֶחָ֑ד וַיִּקְרָא֙ וַיֹּאמַ֔ר ע֚וֹד אַרְבָּעִ֣ים י֔וֹם וְנִֽינְוֵ֖ה נֶהְפָּֽכֶת׃',
      'וַֽיַּאֲמִ֛ינוּ אַנְשֵׁ֥י נִֽינְוֵ֖ה בֵּֽאלֹהִ֑ים וַיִּקְרְאוּ־צוֹם֙ וַיִּלְבְּשׁ֣וּ שַׂקִּ֔ים מִגְּדוֹלָ֖ם וְעַד־קְטַנָּֽם׃',
      'וַיִּגַּ֤ע הַדָּבָר֙ אֶל־מֶ֣לֶך נִֽינְוֵ֔ה וַיָּ֙קָם֙ מִכִּסְא֔וֹ וַיַּעֲבֵ֥ר אַדַּרְתּ֖וֹ מֵֽעָלָ֑יו וַיְכַ֣ס שַׂ֔ק וַיֵּ֖שֶׁב עַל־הָאֵֽפֶר׃',
      'וַיַּזְעֵ֗ק וַיֹּ֙אמֶר֙ בְּנִֽינְוֵ֔ה מִטַּ֧עַם הַמֶּ֛לֶךְ וּגְדֹלָ֖יו לֵאמֹ֑ר הָאָדָ֨ם וְהַבְּהֵמָ֜ה הַבָּקָ֣ר וְהַצֹּ֗אן אַֽל־יִטְעֲמוּ֙ מְא֔וּמָה אַ֨ל־יִרְע֔וּ וּמַ֖יִם אַל־יִשְׁתּֽוּ׃',
      'וְיִתְכַּסּ֣וּ שַׂקִּ֗ים הָֽאָדָם֙ וְהַבְּהֵמָ֔ה וְיִקְרְא֥וּ אֶל־אֱלֹהִ֖ים בְּחָזְקָ֑ה וְיָשֻׁ֗בוּ אִ֚ישׁ מִדַּרְכּ֣וֹ הָֽרָעָ֔ה וּמִן־הֶחָמָ֖ס אֲשֶׁ֥ר בְּכַפֵּיהֶֽם׃',
      'מִֽי־יוֹדֵ֣עַ יָשׁ֔וּב וְנִחַ֖ם הָאֱלֹהִ֑ים וְשָׁ֛ב מֵחֲר֥וֹן אַפּ֖וֹ וְלֹ֥א נֹאבֵֽד׃',
      'וַיַּ֤רְא הָֽאֱלֹהִים֙ אֶֽת־מַ֣עֲשֵׂיהֶ֔ם כִּי־שָׁ֖בוּ מִדַּרְכָּ֣ם הָרָעָ֑ה וַיִּנָּ֣חֶם הָאֱלֹהִ֗ים עַל־הָרָעָ֛ה אֲשֶׁר־דִּבֶּ֥ר לַעֲשׂוֹת־לָהֶ֖ם וְלֹ֥א עָשָֽׂה׃'
    ],
    [
      'וַיֵּ֥רַע אֶל־יוֹנָ֖ה רָעָ֣ה גְדוֹלָ֑ה וַיִּ֖חַר לֽוֹ׃',
      'וַיִּתְפַּלֵּ֨ל אֶל־יְהוָ֜ה וַיֹּאמַ֗ר אָנָּ֤ה יְהוָה֙ הֲלוֹא־זֶ֣ה דְבָרִ֗י עַד־הֱיוֹתִי֙ עַל־אַדְמָתִ֔י עַל־כֵּ֥ן קִדַּ֖מְתִּי לִבְרֹ֣חַ תַּרְשִׁ֑ישָׁה כִּ֣י יָדַ֗עְתִּי כִּ֤י אַתָּה֙ אֵֽל־חַנּ֣וּן וְרַח֔וּם אֶ֤רֶךְ אַפַּ֙יִם֙ וְרַב־חֶ֔סֶד וְנִחָ֖ם עַל־הָרָעָֽה׃',
      'וְעַתָּ֣ה יְהוָ֔ה קַח־נָ֥א אֶת־נַפְשִׁ֖י מִמֶּ֑נִּי כִּ֛י ט֥וֹב מוֹתִ֖י מֵחַיָּֽי׃ (ס)',
      'וַיֹּ֣אמֶר יְהוָ֔ה הַהֵיטֵ֖ב חָ֥רָה לָֽךְ׃',
      'וַיֵּצֵ֤א יוֹנָה֙ מִן־הָעִ֔יר וַיֵּ֖שֶׁב מִקֶּ֣דֶם לָעִ֑יר וַיַּעַשׂ֩ ל֨וֹ שָׁ֜ם סֻכָּ֗ה וַיֵּ֤שֶׁב תַּחְתֶּ֙יהָ֙ בַּצֵּ֔ל עַ֚ד אֲשֶׁ֣ר יִרְאֶ֔ה מַה־יִּהְיֶ֖ה בָּעִֽיר׃',
      'וַיְמַ֣ן יְהוָֽה־אֱ֠לֹהִים קִיקָי֞וֹן וַיַּ֣עַל ׀ מֵעַ֣ל לְיוֹנָ֗ה לִֽהְי֥וֹת צֵל֙ עַל־רֹאשׁ֔וֹ לְהַצִּ֥יל ל֖וֹ מֵרָֽעָת֑וֹ וַיִּשְׂמַ֥ח יוֹנָ֛ה עַל־הַקִּֽיקָי֖וֹן שִׂמְחָ֥ה גְדוֹלָֽה׃',
      'וַיְמַ֤ן הָֽאֱלֹהִים֙ תּוֹלַ֔עַת בַּעֲל֥וֹת הַשַּׁ֖חַר לַֽמָּחֳרָ֑ת וַתַּ֥ךְ אֶת־הַקִּֽיקָי֖וֹן וַיִּיבָֽשׁ׃',
      'וַיְהִ֣י ׀ כִּזְרֹ֣חַ הַשֶּׁ֗מֶשׁ וַיְמַ֨ן אֱלֹהִ֜ים ר֤וּחַ קָדִים֙ חֲרִישִׁ֔ית וַתַּ֥ךְ הַשֶּׁ֛מֶשׁ עַל־רֹ֥אשׁ יוֹנָ֖ה וַיִּתְעַלָּ֑ף וַיִּשְׁאַ֤ל אֶת־נַפְשׁוֹ֙ לָמ֔וּת וַיֹּ֕אמֶר ט֥וֹב מוֹתִ֖י מֵחַיָּֽי׃',
      'וַיֹּ֤אמֶר אֱלֹהִים֙ אֶל־יוֹנָ֔ה הַהֵיטֵ֥ב חָרָֽה־לְךָ֖ עַל־הַקִּֽיקָי֑וֹן וַיֹּ֕אמֶר הֵיטֵ֥ב חָֽרָה־לִ֖י עַד־מָֽוֶת׃',
      'וַיֹּ֣אמֶר יְהוָ֔ה אַתָּ֥ה חַ֙סְתָּ֙ עַל־הַקִּ֣יקָי֔וֹן אֲשֶׁ֛ר לֹא־עָמַ֥לְתָּ בּ֖וֹ וְלֹ֣א גִדַּלְתּ֑וֹ שֶׁבִּן־לַ֥יְלָה הָיָ֖ה וּבִן־לַ֥יְלָה אָבָֽד׃',
      'וַֽאֲנִי֙ לֹ֣א אָח֔וּס עַל־נִינְוֵ֖ה הָעִ֣יר הַגְּדוֹלָ֑ה אֲשֶׁ֣ר יֶשׁ־בָּ֡הּ הַרְבֵּה֩ מִֽשְׁתֵּים־עֶשְׂרֵ֨ה רִבּ֜וֹ אָדָ֗ם אֲשֶׁ֤ר לֹֽא־יָדַע֙ בֵּין־יְמִינ֣וֹ לִשְׂמֹאל֔וֹ וּבְהֵמָ֖ה רַבָּֽה׃'
    ]
  ],
  plain: [
    [
      'ויהי דבר־יהוה אל־יונה בן־אמתי לאמר',
      'קום לך אל־נינוה העיר הגדולה וקרא עליה כי־עלתה רעתם לפני',
      'ויקם יונה לברח תרשישה מלפני יהוה וירד יפו וימצא אניה באה תרשיש ויתן שכרה וירד בה לבוא עמהם תרשישה מלפני יהוה',
      'ויהוה הטיל רוח־גדולה אל־הים ויהי סער־גדול בים והאניה חשבה להשבר',
      'וייראו המלחים ויזעקו איש אל־אלהיו ויטלו את־הכלים אשר באניה אל־הים להקל מעליהם ויונה ירד אל־ירכתי הספינה וישכב וירדם',
      'ויקרב אליו רב החבל ויאמר לו מה־לך נרדם קום קרא אל־אלהיך אולי יתעשת האלהים לנו ולא נאבד',
      'ויאמרו איש אל־רעהו לכו ונפילה גורלות ונדעה בשלמי הרעה הזאת לנו ויפלו גורלות ויפל הגורל על־יונה',
      'ויאמרו אליו הגידה־נא לנו באשר למי־הרעה הזאת לנו מה־מלאכתך ומאין תבוא מה ארצך ואי־מזה עם אתה',
      'ויאמר אליהם עברי אנכי ואת־יהוה אלהי השמים אני ירא אשר־עשה את־הים ואת־היבשה',
      'וייראו האנשים יראה גדולה ויאמרו אליו מה־זאת עשית כי־ידעו האנשים כי־מלפני יהוה הוא ברח כי הגיד להם',
      'ויאמרו אליו מה־נעשה לך וישתק הים מעלינו כי הים הולך וסער',
      'ויאמר אליהם שאוני והטילני אל־הים וישתק הים מעליכם כי יודע אני כי בשלי הסער הגדול הזה עליכם',
      'ויחתרו האנשים להשיב אל־היבשה ולא יכלו כי הים הולך וסער עליהם',
      'ויקראו אל־יהוה ויאמרו אנה יהוה אל־נא נאבדה בנפש האיש הזה ואל־תתן עלינו דם נקיא כי־אתה יהוה כאשר חפצת עשית',
      'וישאו את־יונה ויטלהו אל־הים ויעמד הים מזעפו',
      'וייראו האנשים יראה גדולה את־יהוה ויזבחו־זבח ליהוה וידרו נדרים'
    ],
    [
      'וימן יהוה דג גדול לבלע את־יונה ויהי יונה במעי הדג שלשה ימים ושלשה לילות',
      'ויתפלל יונה אל־יהוה אלהיו ממעי הדגה',
      'ויאמר קראתי מצרה לי אל־יהוה ויענני מבטן שאול שועתי שמעת קולי',
      'ותשליכני מצולה בלבב ימים ונהר יסבבני כל־משבריך וגליך עלי עברו',
      'ואני אמרתי נגרשתי מנגד עיניך אך אוסיף להביט אל־היכל קדשך',
      'אפפוני מים עד־נפש תהום יסבבני סוף חבוש לראשי',
      'לקצבי הרים ירדתי הארץ ברחיה בעדי לעולם ותעל משחת חיי יהוה אלהי',
      'בהתעטף עלי נפשי את־יהוה זכרתי ותבוא אליך תפלתי אל־היכל קדשך',
      'משמרים הבלי־שוא חסדם יעזבו',
      'ואני בקול תודה אזבחה־לך אשר נדרתי אשלמה ישועתה ליהוה',
      'ויאמר יהוה לדג ויקא את־יונה אל־היבשה'
    ],
    [
      'ויהי דבר־יהוה אל־יונה שנית לאמר',
      'קום לך אל־נינוה העיר הגדולה וקרא אליה את־הקריאה אשר אנכי דבר אליך',
      'ויקם יונה וילך אל־נינוה כדבר יהוה ונינוה היתה עיר־גדולה לאלהים מהלך שלשת ימים',
      'ויחל יונה לבוא בעיר מהלך יום אחד ויקרא ויאמר עוד ארבעים יום ונינוה נהפכת',
      'ויאמינו אנשי נינוה באלהים ויקראו־צום וילבשו שקים מגדולם ועד־קטנם',
      'ויגע הדבר אל־מלך נינוה ויקם מכסאו ויעבר אדרתו מעליו ויכס שק וישב על־האפר',
      'ויזעק ויאמר בנינוה מטעם המלך וגדליו לאמר האדם והבהמה הבקר והצאן אל־יטעמו מאומה אל־ירעו ומים אל־ישתו',
      'ויתכסו שקים האדם והבהמה ויקראו אל־אלהים בחזקה וישבו איש מדרכו הרעה ומן־החמס אשר בכפיהם',
      'מי־יודע ישוב ונחם האלהים ושב מחרון אפו ולא נאבד',
      'וירא האלהים את־מעשיהם כי־שבו מדרכם הרעה וינחם האלהים על־הרעה אשר־דבר לעשות־להם ולא עשה'
    ],
    [
      'וירע אל־יונה רעה גדולה ויחר לו',
      'ויתפלל אל־יהוה ויאמר אנה יהוה הלוא־זה דברי עד־היותי על־אדמתי על־כן קדמתי לברח תרשישה כי ידעתי כי אתה אל־חנון ורחום ארך אפים ורב־חסד ונחם על־הרעה',
      'ועתה יהוה קח־נא את־נפשי ממני כי טוב מותי מחיי',
      'ויאמר יהוה ההיטב חרה לך',
      'ויצא יונה מן־העיר וישב מקדם לעיר ויעש לו שם סכה וישב תחתיה בצל עד אשר יראה מה־יהיה בעיר',
      'וימן יהוה־אלהים קיקיון ויעל מעל ליונה להיות צל על־ראשו להציל לו מרעתו וישמח יונה על־הקיקיון שמחה גדולה',
      'וימן האלהים תולעת בעלות השחר למחרת ותך את־הקיקיון וייבש',
      'ויהי כזרח השמש וימן אלהים רוח קדים חרישית ותך השמש על־ראש יונה ויתעלף וישאל את־נפשו למות ויאמר טוב מותי מחיי',
      'ויאמר אלהים אל־יונה ההיטב חרה־לך על־הקיקיון ויאמר היטב חרה־לי עד־מות',
      'ויאמר יהוה אתה חסת על־הקיקיון אשר לא־עמלת בו ולא גדלתו שבן־לילה היה ובן־לילה אבד',
      'ואני לא אחוס על־נינוה העיר הגדולה אשר יש־בה הרבה משתים־עשרה רבו אדם אשר לא־ידע בין־ימינו לשמאלו ובהמה רבה'
    ]
  ]
};

export const jonah: Book = (version: string = 'niqqud') => {
  return { title: 'jonah', heTitle: 'יונה', text: versions[version] };
};
