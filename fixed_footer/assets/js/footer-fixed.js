/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twbs.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */

function fixFooter() {
  var docHeight = $(window).height();
  var footerHeight = $('#footer').height();
  var footerTop = $('#footer').position().top + footerHeight;

  if (footerTop < docHeight) {
   $('#footer').css('margin-top', 10+ (docHeight - footerTop) + 'px');
 }
}

//
setInterval(function(){fixFooter();}, 0);
