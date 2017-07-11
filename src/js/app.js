var app = angular.module("baseApp", []);

app.controller("searchController", function($scope, $http, $sce) {
    var API_KEY = "9fe54d65dbfcbfafbb4af4312a58be2e";
    var HOST_URL = "https://apis.daum.net/search/book";

    $scope.mainCategories = [
        {code: 1, name: "국내도서"},
        {code: 2, name: "e북"},
        {code: 3, name: "영미도서"},
        {code: 4, name: "일본도서"},
        {code: 5, name: "프랑스도서"},
        {code: 6, name: "독일도서"},
        {code: 7, name: "스페인도서"},
        {code: -1, name: "미분류"}
    ];

    $scope.categories = [
        {categoryCode:1, typeName: "소설" , code: 1},
        {categoryCode:1, typeName: "시/에세이", code: 3},
        {categoryCode:1, typeName: "인문", code: 5},
        {categoryCode:1, typeName: "가정/생활", code: 7},
        {categoryCode:1, typeName: "요리", code: 8},
        {categoryCode:1, typeName: "건강", code: 9},
        {categoryCode:1, typeName: "취미/스포츠", code: 11},
        {categoryCode:1, typeName: "경제/경영", code: 13},
        {categoryCode:1, typeName: "자기계발", code: 15},
        {categoryCode:1, typeName: "정치/사회", code: 17},
        {categoryCode:1, typeName: "정부간행물", code: 18},
        {categoryCode:1, typeName: "역사/문화", code: 19},
        {categoryCode:1, typeName: "종교", code: 21},
        {categoryCode:1, typeName: "예술/대중문화", code: 23},
        {categoryCode:1, typeName: "중/고등학습", code: 25},
        {categoryCode:1, typeName: "기술/공학", code: 26},
        {categoryCode:1, typeName: "외국어", code: 27},
        {categoryCode:1, typeName: "과학", code: 29},
        {categoryCode:1, typeName: "취업/수험서", code: 31},
        {categoryCode:1, typeName: "여행/기행", code: 32},
        {categoryCode:1, typeName: "컴퓨터/IT", code: 33},
        {categoryCode:1, typeName: "잡지", code: 35},
        {categoryCode:1, typeName: "사전", code: 37},
        {categoryCode:1, typeName: "청소년", code: 38},
        {categoryCode:1, typeName: "초등참고서", code: 39},
        {categoryCode:1, typeName: "유아", code: 41},
        {categoryCode:1, typeName: "아동", code: 42},
        {categoryCode:1, typeName: "어린이영어", code: 45},
        {categoryCode:1, typeName: "만화", code: 47},
        {categoryCode:1, typeName: "대학교재", code: 50},
        {categoryCode:1, typeName: "어린이전집", code: 51},
        {categoryCode:1, typeName: "한국소개도서", code: 53},
        {categoryCode:2, typeName: "소설", code: 901},
        {categoryCode:2, typeName: "장르소설", code: 902},
        {categoryCode:2, typeName: "시/에세이", code: 903},
        {categoryCode:2, typeName: "경제/경영", code: 904},
        {categoryCode:2, typeName: "자기계발", code: 905},
        {categoryCode:2, typeName: "인문", code: 906},
        {categoryCode:2, typeName: "정치/사회", code: 907},
        {categoryCode:2, typeName: "로맨스/무협/판타지", code: 908},
        {categoryCode:2, typeName: "종교", code: 909},
        {categoryCode:2, typeName: "예술/대중문화", code: 910},
        {categoryCode:2, typeName: "가정/생활", code: 911},
        {categoryCode:2, typeName: "건강", code: 912},
        {categoryCode:2, typeName: "여행/취미", code: 913},
        {categoryCode:2, typeName: "청소년", code: 914},
        {categoryCode:2, typeName: "학습/수험서", code: 915},
        {categoryCode:2, typeName: "유아", code: 916},
        {categoryCode:2, typeName: "아동", code: 917},
        {categoryCode:2, typeName: "외국어/사전", code: 918},
        {categoryCode:2, typeName: "과학", code: 919},
        {categoryCode:2, typeName: "컴퓨터/IT", code: 920},
        {categoryCode:2, typeName: "잡지", code: 921},
        {categoryCode:2, typeName: "만화", code: 922},
        {categoryCode:2, typeName: "외국도서", code: 923},
        {categoryCode:2, typeName: "무료eBook", code: 924},
        {categoryCode:2, typeName: "개인출판", code: 925},
        {categoryCode:2, typeName: "오디오북", code: 926},
        {categoryCode:2, typeName: "연재", code: 951},
        {categoryCode:2, typeName: "eReader Free", code: 953},
        {categoryCode:3, typeName: "문학", code: 101},
        {categoryCode:3, typeName: "취미/실용/여행", code: 103},
        {categoryCode:3, typeName: "생활/요리/건강", code: 105},
        {categoryCode:3, typeName: "예술/건축", code: 107},
        {categoryCode:3, typeName: "인문/사회", code: 109},
        {categoryCode:3, typeName: "경제/경영", code: 111},
        {categoryCode:3, typeName: "과학/기술", code: 113},
        {categoryCode:3, typeName: "아동", code: 115},
        {categoryCode:3, typeName: "한국관련도서", code: 117},
        {categoryCode:3, typeName: "NON_BOOK", code: 119},
        {categoryCode:3, typeName: "UMI", code: 120},
        {categoryCode:3, typeName: "ELT/영어교재", code: 181},
        {categoryCode:3, typeName: "어린이영어", code: 183},
        {categoryCode:3, typeName: "대학교재", code: 191},
        {categoryCode:3, typeName: "중국관련도서", code: 194},
        {categoryCode:4, typeName: "일서메인", code: 239},
        {categoryCode:4, typeName: "잡지", code: 241},
        {categoryCode:4, typeName: "엔터테인먼트", code: 243},
        {categoryCode:4, typeName: "만화", code: 245},
        {categoryCode:4, typeName: "문학", code: 247},
        {categoryCode:4, typeName: "라이트노벨", code: 249},
        {categoryCode:4, typeName: "문고(포켓북)", code: 251},
        {categoryCode:4, typeName: "신서(포켓북)", code: 253},
        {categoryCode:4, typeName: "아동", code: 255},
        {categoryCode:4, typeName: "실용서/예술", code: 257},
        {categoryCode:4, typeName: "인문/사회", code: 259},
        {categoryCode:4, typeName: "자연/기술과학", code: 261},
        {categoryCode:4, typeName: "어학/학습/사전", code: 263},
        {categoryCode:4, typeName: "문구/멀티/기타", code: 264},
        {categoryCode:4, typeName: "중국관련도서", code: 267},
        {categoryCode:5, typeName: "프랑스종합", code: 486},
        {categoryCode:6, typeName: "독일종합", code: 588},
        {categoryCode:7, typeName: "스페인종합", code: 690},
        {categoryCode:-1, typeName: "미분류", code: 0}
    ];

    $scope.mainCategory = {code: 1, name: "국내도서"};

    $scope.subCtategoryList = [];
    $scope.subCategory = {};

    $scope.searchTxt = "";
    $scope.currentPage = 1;

    $scope.searchList = [];

    function serialize(obj) {
        var queryArr = [];
        for(var str in obj) {
            if(true == obj.hasOwnProperty(str)) {
                queryArr.push(str+"="+obj[str]);
            }
        }
        return queryArr.join("&");
    }

    function filterSubCategory( code ) {
        var filterdCategory = _.filter($scope.categories, function( data ) {
            return data.categoryCode == code;
        });
        return filterdCategory;
    }

    $scope.onSearchClick = function() {
        var option = {};
        option.apikey = API_KEY;
        option.q = $scope.searchTxt;
        option.result = 20;
        option.advance = "n";
        option.pageno = $scope.currentPage;
        option.sort = "accu";
        option.searchType = "all";
        option.cate_id = $scope.subCategory.code;
        option.output = "json";

        if(true == s.isBlank( option.q )) {
            alert("검색어를 입력하세요");
            return false;
        }

        var url = HOST_URL + "?" + serialize(option);

        $http({method: 'jsonp', url: $sce.trustAsResourceUrl(url)})
            .then(
                function(response) {
                    console.log(response.data.channel);

                    var list = response.data.channel.item;

                    _.each(list, function(data) {
                        data.cover_s_url = $sce.trustAsResourceUrl(data.cover_s_url);
                    });
                    $scope.searchList = list;
                },
                function(error) {
                    alert("검색도중 오류가 발생했습니다.");
                    console.log(error);
                }
            );
    };
    $scope.onMainCategoryChange = function() {
        var categoryList = filterSubCategory($scope.mainCategory.code);

        $scope.subCategoryList = categoryList;
        $scope.subCategory = categoryList[0];
    };
    function initialize() {
        $scope.onMainCategoryChange();
    }
    initialize();
});





















//-----
