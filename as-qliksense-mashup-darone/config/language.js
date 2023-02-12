/*!
*
* The MIT License (MIT)
* Copyright (c) 2023
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of
* this software and associated documentation files (the "Software"), to deal in
* the Software without restriction, including without limitation the rights to
* use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
* the Software, and to permit persons to whom the Software is furnished to do so,
* subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
* FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
* COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
* IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*
* @version v1.0.0
* @link https://github.com/andressousa/as-qliksense-mashup-darone
* @author André Sousa
* @license MIT
*/

// Internationalization
// - German: de
// - English: en
// - Spanish: es
// - French: fr
// - Italian: it
// - Japanese: ja
// - Korean: ko
// - Dutch: nl
// - Polish: pl
// - Brazilian Portuguese: pt
// - Russian: ru
// - Swedish: sv
// - Turkish:  tr
// - Simplified Chinese: zh-CN
// - Traditional Chinese: zh-TW
var arrLabels = {};

arrLabels['zh-TW'] = {
	//Language name
	country: 'Traditional Chinese',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: '左側菜單',

	//Dashboard tab name
	dashboard: '儀表板',

	//Analysis tab name
	analysis: '分析',

	//Report tab name
	report: '報告',

	//Help tab name
	help: '幫助',

	//About tab name
	about: '關於',

	//Expand button label
	expand: '擴張',

	//Language button label
	translate: '語',

	//Bookmarks button label
	bookmarks: '書籤',

	//No bookmarks label
	no_bookmarks: '沒有書籤',

	//New Bookmark button label
	add_bookmark: '書籤',

	//Input label for add bookmark form
	add_bookmark_title: '標題',

	//Input label for add bookmark form
	add_bookmark_desc: '描述',

	//Button label for add bookmark form
	add_bookmark_button: '提交',

	//Selections Bar button label
	selections_bar: '選擇欄',

	//Filter button label
	filter: '篩選',

	//Filter tab label 1
	filter_1: '+ 篩選 1',

	//Filter tab label 2
	filter_2: '+ 篩選 2',

	//Filter tab label 3
	filter_3: '+ 篩選 3',

	//Backward button label
	backward: '落後',

	//Forward button label
	forward: '向前',

	//Lock button label
	lock: '鎖',

	//Unlock button label
	unlock: '開鎖',

	//Clear All button label
	clearall: '全部清除',

	//Close chart button label
	close_chart: '關閉圖表',

	//Export chart button label
	export_data: '導出數據',

	//Default App Name footer label
	app_name: '應用名稱',

	//Default Reload Time footer label
	reload_time: '重新加載日期:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: '出了點問題，一些對像沒有加載。',

	//Default error message on export objects failure
	msg_error_export_objects: '沒有要導出的數據。',
}

arrLabels['zh-CN'] = {
	//Language name
	country: 'Simplified Chinese',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: '左侧菜单',

	//Dashboard tab name
	dashboard: '仪表板',

	//Analysis tab name
	analysis: '分析',

	//Report tab name
	report: '报告',

	//Help tab name
	help: '帮助',

	//About tab name
	about: '关于',

	//Expand button label
	expand: '扩张',

	//Language button label
	translate: '语',

	//Bookmarks button label
	bookmarks: '书签',

	//No bookmarks label
	no_bookmarks: '没有书签',

	//New Bookmark button label
	add_bookmark: '书签',

	//Input label for add bookmark form
	add_bookmark_title: '标题',

	//Input label for add bookmark form
	add_bookmark_desc: '描述',

	//Button label for add bookmark form
	add_bookmark_button: '提交',

	//Selections Bar button label
	selections_bar: '选择栏',

	//Filter button label
	filter: '筛选',

	//Filter tab label 1
	filter_1: '+ 筛选 1',

	//Filter tab label 2
	filter_2: '+ 筛选 2',

	//Filter tab label 3
	filter_3: '+ 筛选 3',

	//Backward button label
	backward: '落后',

	//Forward button label
	forward: '向前',

	//Lock button label
	lock: '锁',

	//Unlock button label
	unlock: '开锁',

	//Clear All button label
	clearall: '全部清除',

	//Close chart button label
	close_chart: '关闭图表',

	//Export chart button label
	export_data: '导出数据',

	//Default App Name footer label
	app_name: '应用名称',

	//Default Reload Time footer label
	reload_time: '重新加载日期:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: '出了点问题，一些对象没有加载。',

	//Default error message on export objects failure
	msg_error_export_objects: '没有要导出的数据。',
}

arrLabels['tr'] = {

	//Language name
	country: 'Turkish',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Sol Menü',

	//Dashboard tab name
	dashboard: 'Gösterge Paneli',

	//Analysis tab name
	analysis: 'Analiz',

	//Report tab name
	report: 'Bildiri',

	//Help tab name
	help: 'Yardım',

	//About tab name
	about: 'Hakkında',

	//Expand button label
	expand: 'Genişletmek',

	//Language button label
	translate: 'Dil',

	//Bookmarks button label
	bookmarks: 'Yer Imleri',

	//No bookmarks label
	no_bookmarks: 'Yer İşareti Yok',

	//New Bookmark button label
	add_bookmark: 'Yer Imi',

	//Input label for add bookmark form
	add_bookmark_title: 'Başlık',

	//Input label for add bookmark form
	add_bookmark_desc: 'Tanım',

	//Button label for add bookmark form
	add_bookmark_button: 'Göndermek',

	//Selections Bar button label
	selections_bar: 'Seçimler Çubuğu',

	//Filter button label
	filter: 'Filtre',

	//Filter tab label 1
	filter_1: '+ Filtre 1',

	//Filter tab label 2
	filter_2: '+ Filtre 2',

	//Filter tab label 3
	filter_3: '+ Filtre 3',

	//Backward button label
	backward: 'Geriye',

	//Forward button label
	forward: 'İleri',

	//Lock button label
	lock: 'Kilit',

	//Unlock button label
	unlock: 'Kilidini aç',

	//Clear All button label
	clearall: 'Hepsini Temizle',

	//Close chart button label
	close_chart: 'Grafiği Kapat',

	//Export chart button label
	export_data: 'Verileri Dışa Aktar',

	//Default App Name footer label
	app_name: 'Uygulama Ismi',

	//Default Reload Time footer label
	reload_time: 'Yeniden Yükleme Tarihi:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Bir şeyler ters gitti ve bazı nesneler yüklenmedi.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Dışa aktarılacak veri yok.',
}

arrLabels['sv'] = {

	//Language name
	country: 'Swedish',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Vänster Meny',

	//Dashboard tab name
	dashboard: 'Instrumentbräda',

	//Analysis tab name
	analysis: 'Analys',

	//Report tab name
	report: 'Rapportera',

	//Help tab name
	help: 'Hjälp',

	//About tab name
	about: 'Handla om',

	//Expand button label
	expand: 'Bygga Ut',

	//Language button label
	translate: 'Språk',

	//Bookmarks button label
	bookmarks: 'Bokmärken',

	//No bookmarks label
	no_bookmarks: 'Inga Bokmärken',

	//New Bookmark button label
	add_bookmark: 'Bokmärke',

	//Input label for add bookmark form
	add_bookmark_title: 'Titel',

	//Input label for add bookmark form
	add_bookmark_desc: 'Beskrivning',

	//Button label for add bookmark form
	add_bookmark_button: 'Skicka In',

	//Selections Bar button label
	selections_bar: 'Valfält',

	//Filter button label
	filter: 'Filtrera',

	//Filter tab label 1
	filter_1: '+ Filtrera 1',

	//Filter tab label 2
	filter_2: '+ Filtrera 2',

	//Filter tab label 3
	filter_3: '+ Filtrera 3',

	//Backward button label
	backward: 'Bakåt',

	//Forward button label
	forward: 'Fram',

	//Lock button label
	lock: 'Låsa',

	//Unlock button label
	unlock: 'Låsa Upp',

	//Clear All button label
	clearall: 'Rensa Alla',

	//Close chart button label
	close_chart: 'Stäng Diagram',

	//Export chart button label
	export_data: 'Exportera Data',

	//Default App Name footer label
	app_name: 'App-namn',

	//Default Reload Time footer label
	reload_time: 'Omladdningsdatum:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Något gick fel och vissa objekt laddades inte.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Det finns ingen data att exportera.',
}

arrLabels['ru'] = {

	//Language name
	country: 'Russian',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Левое Mеню',

	//Dashboard tab name
	dashboard: 'Приборная Доска',

	//Analysis tab name
	analysis: 'Анализ',

	//Report tab name
	report: 'Отчет',

	//Help tab name
	help: 'Помощь',

	//About tab name
	about: 'О',

	//Expand button label
	expand: 'Расширять',

	//Language button label
	translate: 'Язык',

	//Bookmarks button label
	bookmarks: 'Закладки',

	//No bookmarks label
	no_bookmarks: 'Нет Закладок',

	//New Bookmark button label
	add_bookmark: 'Закладка',

	//Input label for add bookmark form
	add_bookmark_title: 'Заголовок',

	//Input label for add bookmark form
	add_bookmark_desc: 'Описание',

	//Button label for add bookmark form
	add_bookmark_button: 'Отправлять',

	//Selections Bar button label
	selections_bar: 'Панель Быбора',

	//Filter button label
	filter: 'Фильтр',

	//Filter tab label 1
	filter_1: '+ Фильтр 1',

	//Filter tab label 2
	filter_2: '+ Фильтр 2',

	//Filter tab label 3
	filter_3: '+ Фильтр 3',

	//Backward button label
	backward: 'Назад',

	//Forward button label
	forward: 'Вперед',

	//Lock button label
	lock: 'Замок',

	//Unlock button label
	unlock: 'Разблокировать',

	//Clear All button label
	clearall: 'Очистить Все',

	//Close chart button label
	close_chart: 'Закрыть Диаграмму',

	//Export chart button label
	export_data: 'Экспорт Данных',

	//Default App Name footer label
	app_name: 'Имя Приложение',

	//Default Reload Time footer label
	reload_time: 'Дата Перезагрузки:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Что-то пошло не так и некоторые объекты не загрузились.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Нет данных для экспорта.',
}

arrLabels['pt'] = {

	//Language name
	country: 'Brazilian Portuguese',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Menu Esquerdo',

	//Dashboard tab name
	dashboard: 'Painel',

	//Analysis tab name
	analysis: 'Análise',

	//Report tab name
	report: 'Relatório',

	//Help tab name
	help: 'Ajuda',

	//About tab name
	about: 'Sobre',

	//Expand button label
	expand: 'Expandir',

	//Language button label
	translate: 'Idioma',

	//Bookmarks button label
	bookmarks: 'Marcadores',

	//No bookmarks label
	no_bookmarks: 'Sem Marcadores',

	//New Bookmark button label
	add_bookmark: 'Marcador',

	//Input label for add bookmark form
	add_bookmark_title: 'Título',

	//Input label for add bookmark form
	add_bookmark_desc: 'Descrição',

	//Button label for add bookmark form
	add_bookmark_button: 'Enviar',

	//Selections Bar button label
	selections_bar: 'Barra de Seleções',

	//Filter button label
	filter: 'Filtro',

	//Filter tab label 1
	filter_1: '+ Filtro 1',

	//Filter tab label 2
	filter_2: '+ Filtro 2',

	//Filter tab label 3
	filter_3: '+ Filtro 3',

	//Backward button label
	backward: 'Voltar',

	//Forward button label
	forward: 'Avançar',

	//Lock button label
	lock: 'Travar',

	//Unlock button label
	unlock: 'Destravar',

	//Clear All button label
	clearall: 'Limpar Tudo',

	//Close chart button label
	close_chart: 'Fechar Gráfico',

	//Export chart button label
	export_data: 'Exportar Dados',

	//Default App Name footer label
	app_name: 'Aplicativo',

	//Default Reload Time footer label
	reload_time: 'Data de Recarga:',

	//Default date time format
	date_format: 'd/m/Y H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Algo deu errado e alguns objetos não foram carregados.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Não há dados para exportar.',
}

arrLabels['pl'] = {

	//Language name
	country: 'Polish',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Lewe Menu',

	//Dashboard tab name
	dashboard: 'Panel',

	//Analysis tab name
	analysis: 'Analiza',

	//Report tab name
	report: 'Raport',

	//Help tab name
	help: 'Pomoc',

	//About tab name
	about: 'O',

	//Expand button label
	expand: 'Zwiększać',

	//Language button label
	translate: 'Język',

	//Bookmarks button label
	bookmarks: 'Zakładki',

	//No bookmarks label
	no_bookmarks: 'Brak zakładek',

	//New Bookmark button label
	add_bookmark: 'Zakładka',

	//Input label for add bookmark form
	add_bookmark_title: 'Tytuł',

	//Input label for add bookmark form
	add_bookmark_desc: 'Opis',

	//Button label for add bookmark form
	add_bookmark_button: 'Składać',

	//Selections Bar button label
	selections_bar: 'Pasek Wyboru',

	//Filter button label
	filter: 'Filtr',

	//Filter tab label 1
	filter_1: '+ Filtr 1',

	//Filter tab label 2
	filter_2: '+ Filtr 2',

	//Filter tab label 3
	filter_3: '+ Filtr 3',

	//Backward button label
	backward: 'Do Tyłu',

	//Forward button label
	forward: 'Do Przodu',

	//Lock button label
	lock: 'Zamek',

	//Unlock button label
	unlock: 'Odblokować',

	//Clear All button label
	clearall: 'Wyczyść Wszystko',

	//Close chart button label
	close_chart: 'Zamknij Wykres',

	//Export chart button label
	export_data: 'Eksportuj Dane',

	//Default App Name footer label
	app_name: 'Nazwa Aplikacji',

	//Default Reload Time footer label
	reload_time: 'Data Przeładowania:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Coś poszło nie tak i niektóre obiekty nie zostały załadowane.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Brak danych do wyeksportowania.',
}

arrLabels['nl'] = {

	//Language name
	country: 'Dutch',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Linkermenu',

	//Dashboard tab name
	dashboard: 'Dashboard',

	//Analysis tab name
	analysis: 'Analyse',

	//Report tab name
	report: 'Rapport',

	//Help tab name
	help: 'Helpen',

	//About tab name
	about: 'Over',

	//Expand button label
	expand: 'Uitbreiden',

	//Language button label
	translate: 'Taal',

	//Bookmarks button label
	bookmarks: 'Bladwijzers',

	//No bookmarks label
	no_bookmarks: 'Geen Bladwijzers',

	//New Bookmark button label
	add_bookmark: 'Bladwijzer',

	//Input label for add bookmark form
	add_bookmark_title: 'Titel',

	//Input label for add bookmark form
	add_bookmark_desc: 'Beschrijving',

	//Button label for add bookmark form
	add_bookmark_button: 'Indienen',

	//Selections Bar button label
	selections_bar: 'Selectiesbalk',

	//Filter button label
	filter: 'Filter',

	//Filter tab label 1
	filter_1: '+ Filter 1',

	//Filter tab label 2
	filter_2: '+ Filter 2',

	//Filter tab label 3
	filter_3: '+ Filter 3',

	//Backward button label
	backward: 'Achteruit',

	//Forward button label
	forward: 'Naar Voren',

	//Lock button label
	lock: 'Op Slot Doen',

	//Unlock button label
	unlock: 'Ontgrendelen',

	//Clear All button label
	clearall: 'Wis Alles',

	//Close chart button label
	close_chart: 'Grafiek Sluiten',

	//Export chart button label
	export_data: 'Exportgegevens',

	//Default App Name footer label
	app_name: 'Applicatie Naam',

	//Default Reload Time footer label
	reload_time: 'Herlaaddatum:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Er is iets misgegaan en sommige objecten zijn niet geladen.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Er zijn geen gegevens om te exporteren.',
}

arrLabels['ko'] = {

	//Language name
	country: 'Korean',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: '왼쪽 메뉴',

	//Dashboard tab name
	dashboard: '계기반',

	//Analysis tab name
	analysis: '분석',

	//Report tab name
	report: '보고서',

	//Help tab name
	help: '돕다',

	//About tab name
	about: '에 대한',

	//Expand button label
	expand: '확장하다',

	//Language button label
	translate: '언어',

	//Bookmarks button label
	bookmarks: '책갈피',

	//No bookmarks label
	no_bookmarks: '북마크 없음',

	//New Bookmark button label
	add_bookmark: '서표',

	//Input label for add bookmark form
	add_bookmark_title: '제목',

	//Input label for add bookmark form
	add_bookmark_desc: '설명',

	//Button label for add bookmark form
	add_bookmark_button: '제출하다',

	//Selections Bar button label
	selections_bar: '선택 표시줄',

	//Filter button label
	filter: '필터',

	//Filter tab label 1
	filter_1: '+ 필터 1',

	//Filter tab label 2
	filter_2: '+ 필터 2',

	//Filter tab label 3
	filter_3: '+ 필터 3',

	//Backward button label
	backward: '뒤로',

	//Forward button label
	forward: '앞으로',

	//Lock button label
	lock: '자물쇠',

	//Unlock button label
	unlock: '터놓다',

	//Clear All button label
	clearall: '모두 지우기',

	//Close chart button label
	close_chart: '차트 닫기',

	//Export chart button label
	export_data: '데이터 내보내기',

	//Default App Name footer label
	app_name: '앱 이름',

	//Default Reload Time footer label
	reload_time: '새로고침 날짜:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: '문제가 발생하여 일부 개체가 로드되지 않았습니다.',

	//Default error message on export objects failure
	msg_error_export_objects: '내보낼 데이터가 없습니다.',
}

arrLabels['ja'] = {

	//Language name
	country: 'Japanese',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: '左メニュー',

	//Dashboard tab name
	dashboard: 'ダッシュボード',

	//Analysis tab name
	analysis: '分析',

	//Report tab name
	report: '報告',

	//Help tab name
	help: 'ヘルプ',

	//About tab name
	about: '約',

	//Expand button label
	expand: '拡大',

	//Language button label
	translate: '言語',

	//Bookmarks button label
	bookmarks: 'ブックマーク',

	//No bookmarks label
	no_bookmarks: 'ブックマークなし',

	//New Bookmark button label
	add_bookmark: 'ブックマーク',

	//Input label for add bookmark form
	add_bookmark_title: '題名',

	//Input label for add bookmark form
	add_bookmark_desc: '説明',

	//Button label for add bookmark form
	add_bookmark_button: '送信',

	//Selections Bar button label
	selections_bar: 'セレクションバー',

	//Filter button label
	filter: 'フィルター',

	//Filter tab label 1
	filter_1: '+ フィルター 1',

	//Filter tab label 2
	filter_2: '+ フィルター 2',

	//Filter tab label 3
	filter_3: '+ フィルター 3',

	//Backward button label
	backward: '後方',

	//Forward button label
	forward: '前方',

	//Lock button label
	lock: 'ロック',

	//Unlock button label
	unlock: 'ロックを解除する',

	//Clear All button label
	clearall: 'すべてクリア',

	//Close chart button label
	close_chart: 'チャートを閉じる',

	//Export chart button label
	export_data: 'データのエクスポート',

	//Default App Name footer label
	app_name: 'アプリ名',

	//Default Reload Time footer label
	reload_time: 'リロード日:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: '何かがうまくいかず、いくつかのオブジェクトがロードされませんでした。',

	//Default error message on export objects failure
	msg_error_export_objects: 'エクスポートするデータはありません。',
}

arrLabels['it'] = {

	//Language name
	country: 'Italian',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Menù a Dinistra',

	//Dashboard tab name
	dashboard: 'Pannello di Controllo',

	//Analysis tab name
	analysis: 'Analisi',

	//Report tab name
	report: 'Rapporto',

	//Help tab name
	help: 'Aiuto',

	//About tab name
	about: 'Di',

	//Expand button label
	expand: 'Espandere',

	//Language button label
	translate: 'Linguaggio',

	//Bookmarks button label
	bookmarks: 'Segnalibri',

	//No bookmarks label
	no_bookmarks: 'Nessun Segnalibro',

	//New Bookmark button label
	add_bookmark: 'Segnalibro',

	//Input label for add bookmark form
	add_bookmark_title: 'Titolo',

	//Input label for add bookmark form
	add_bookmark_desc: 'Description',

	//Button label for add bookmark form
	add_bookmark_button: 'Descrizione',

	//Selections Bar button label
	selections_bar: 'Barra delle Selezioni',

	//Filter button label
	filter: 'Filtro',

	//Filter tab label 1
	filter_1: '+ Filtro 1',

	//Filter tab label 2
	filter_2: '+ Filtro 2',

	//Filter tab label 3
	filter_3: '+ Filtro 3',

	//Backward button label
	backward: 'Indietro',

	//Forward button label
	forward: 'Inoltrare',

	//Lock button label
	lock: 'Serratura',

	//Unlock button label
	unlock: 'Sbloccare',

	//Clear All button label
	clearall: 'Cancella Tutto',

	//Close chart button label
	close_chart: 'Chiudi Grafico',

	//Export chart button label
	export_data: 'Esporta Dati',

	//Default App Name footer label
	app_name: 'Nome dell`Applicazione',

	//Default Reload Time footer label
	reload_time: 'Data di Ricarica:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Qualcosa è andato storto e alcuni oggetti non sono stati caricati.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Non ci sono dati da esportare.',
}

arrLabels['fr'] = {

	//Language name
	country: 'French',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Menu de Gauche',

	//Dashboard tab name
	dashboard: 'Tableau de Bord',

	//Analysis tab name
	analysis: 'Une Analyse',

	//Report tab name
	report: 'Signaler',

	//Help tab name
	help: 'Aider',

	//About tab name
	about: 'À Propos de',

	//Expand button label
	expand: 'Développer',

	//Language button label
	translate: 'Langue',

	//Bookmarks button label
	bookmarks: 'Signets',

	//No bookmarks label
	no_bookmarks: 'Aucun Marque-page',

	//New Bookmark button label
	add_bookmark: 'Signet',

	//Input label for add bookmark form
	add_bookmark_title: 'Titre',

	//Input label for add bookmark form
	add_bookmark_desc: 'La Description',

	//Button label for add bookmark form
	add_bookmark_button: 'Soumettre',

	//Selections Bar button label
	selections_bar: 'Barre de Sélections',

	//Filter button label
	filter: 'Filtre',

	//Filter tab label 1
	filter_1: '+ Filtre 1',

	//Filter tab label 2
	filter_2: '+ Filtre 2',

	//Filter tab label 3
	filter_3: '+ Filtre 3',

	//Backward button label
	backward: 'En Arrière',

	//Forward button label
	forward: 'Vers L`avant',

	//Lock button label
	lock: 'Bloquer',

	//Unlock button label
	unlock: 'Ouvrir',

	//Clear All button label
	clearall: 'Tout Effacer',

	//Close chart button label
	close_chart: 'Fermer le Graphique',

	//Export chart button label
	export_data: 'Exporter des Données',

	//Default App Name footer label
	app_name: 'Nom de L`application',

	//Default Reload Time footer label
	reload_time: 'Date de Rechargement:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Une erreur s`est produite et certains objets n`ont pas été chargés.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Il n`y a pas de données à exporter.',
}

arrLabels['es'] = {

	//Language name
	country: 'Spanish',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Menú izquierdo',

	//Dashboard tab name
	dashboard: 'Tablero',

	//Analysis tab name
	analysis: 'Análisis',

	//Report tab name
	report: 'Reporte',

	//Help tab name
	help: 'Ayuda',

	//About tab name
	about: 'Sobre',

	//Expand button label
	expand: 'Expandir',

	//Language button label
	translate: 'Idioma',

	//Bookmarks button label
	bookmarks: 'Marcadores',

	//No bookmarks label
	no_bookmarks: 'Sin Marcadores',

	//New Bookmark button label
	add_bookmark: 'Marcador',

	//Input label for add bookmark form
	add_bookmark_title: 'Título',

	//Input label for add bookmark form
	add_bookmark_desc: 'Descripción',

	//Button label for add bookmark form
	add_bookmark_button: 'Enviar',

	//Selections Bar button label
	selections_bar: 'Barra de Selecciones',

	//Filter button label
	filter: 'Filtrar',

	//Filter tab label 1
	filter_1: '+ Filtrar 1',

	//Filter tab label 2
	filter_2: '+ Filtrar 2',

	//Filter tab label 3
	filter_3: '+ Filtrar 3',

	//Backward button label
	backward: 'Hacia atrás',

	//Forward button label
	forward: 'Delantero',

	//Lock button label
	lock: 'Cerrar',

	//Unlock button label
	unlock: 'Desbloquear',

	//Clear All button label
	clearall: 'Limpiar Todo',

	//Close chart button label
	close_chart: 'Cerrar Gráfico',

	//Export chart button label
	export_data: 'Exportar Datos',

	//Default App Name footer label
	app_name: 'Aplicación',

	//Default Reload Time footer label
	reload_time: 'Fecha de Recarga:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Algo salió mal y algunos objetos no se cargaron.',

	//Default error message on export objects failure
	msg_error_export_objects: 'No hay datos para exportar.',
}

arrLabels['en'] = {

	//Language name
	country: 'English',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Left Menu',

	//Dashboard tab name
	dashboard: 'Dashboard',

	//Analysis tab name
	analysis: 'Analysis',

	//Report tab name
	report: 'Report',

	//Help tab name
	help: 'Help',

	//About tab name
	about: 'About',

	//Expand button label
	expand: 'Expand',

	//Language button label
	translate: 'Language',

	//Bookmarks button label
	bookmarks: 'Bookmarks',

	//No bookmarks label
	no_bookmarks: 'No Bookmarks',

	//New Bookmark button label
	add_bookmark: 'Bookmark',

	//Input label for add bookmark form
	add_bookmark_title: 'Title',

	//Input label for add bookmark form
	add_bookmark_desc: 'Description',

	//Button label for add bookmark form
	add_bookmark_button: 'Submit',

	//Selections Bar button label
	selections_bar: 'Selections Bar',

	//Filter button label
	filter: 'Filter',

	//Filter tab label 1
	filter_1: '+ Filter 1',

	//Filter tab label 2
	filter_2: '+ Filter 2',

	//Filter tab label 3
	filter_3: '+ Filter 3',

	//Backward button label
	backward: 'Backward',

	//Forward button label
	forward: 'Forward',

	//Lock button label
	lock: 'Lock',

	//Unlock button label
	unlock: 'Unlock',

	//Clear All button label
	clearall: 'Clear All',

	//Close chart button label
	close_chart: 'Close Chart',

	//Export chart button label
	export_data: 'Export Data',

	//Default App Name footer label
	app_name: 'App Name',

	//Default Reload Time footer label
	reload_time: 'Reload Date:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Something went wrong and some objects were not loaded.',

	//Default error message on export objects failure
	msg_error_export_objects: 'There is no data to export.',
}

arrLabels['de'] = {

	//Language name
	country: 'German',

	//Browser title
	title: 'DAR One - Qlik Sense mashup',

	//Logo title
	logo: 'DAR One',

	//Menu name
	menu: 'Linkes Menü',

	//Dashboard tab name
	dashboard: 'Armaturenbrett',

	//Analysis tab name
	analysis: 'Analyse',

	//Report tab name
	report: 'Bericht',

	//Help tab name
	help: 'Hilfe',

	//About tab name
	about: 'Um',

	//Expand button label
	expand: 'Erweitern',

	//Language button label
	translate: 'Sprache',

	//Bookmarks button label
	bookmarks: 'Lesezeichen',

	//No bookmarks label
	no_bookmarks: 'Keine Lesezeichen',

	//New Bookmark button label
	add_bookmark: 'Lesezeichen',

	//Input label for add bookmark form
	add_bookmark_title: 'Titel',

	//Input label for add bookmark form
	add_bookmark_desc: 'Beschreibung',

	//Button label for add bookmark form
	add_bookmark_button: 'Einreichen',

	//Selections Bar button label
	selections_bar: 'Auswahlleiste',

	//Filter button label
	filter: 'Filter',

	//Filter tab label 1
	filter_1: '+ Filter 1',

	//Filter tab label 2
	filter_2: '+ Filter 2',

	//Filter tab label 3
	filter_3: '+ Filter 3',

	//Backward button label
	backward: 'Rückwärts',

	//Forward button label
	forward: 'Nach vorne',

	//Lock button label
	lock: 'Sperren',

	//Unlock button label
	unlock: 'Freischalten',

	//Clear All button label
	clearall: 'Alles Löschen',

	//Close chart button label
	close_chart: 'Diagramm Schließen',

	//Export chart button label
	export_data: 'Daten Exportieren',

	//Default App Name footer label
	app_name: 'App Name',

	//Default Reload Time footer label
	reload_time: 'Nachladezeit:',

	//Default date time format
	date_format: 'Y-m-d H:m:s',

	//Default error message on load objects failure
	msg_error_load_objects: 'Etwas ist schief gelaufen und einige Objekte wurden nicht geladen.',

	//Default error message on export objects failure
	msg_error_export_objects: 'Es sind keine Daten zum Exportieren vorhanden.',
}