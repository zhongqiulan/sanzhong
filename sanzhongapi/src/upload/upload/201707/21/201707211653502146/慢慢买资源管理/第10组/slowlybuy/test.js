<div class="footer" data-totalpage="{{pages.length}}">
        <div class="container-fluid">
            <div class="col-xs-4">
                <button class="prev">上一页</button>
            </div>
            <div class="col-xs-4 center">
                <select name="" id="">
                    {{each pages as v i }}
                        <option value="">{{v}} / {{pages.length}}</option> 
                  {{/each}}
                </select>
            </div>
            <div class="col-xs-4">
                <button class="next">下一页</button>
            </div>
        </div>
    </div>