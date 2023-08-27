var t = require;
var e = module;
var o = exports;
var a, i = this && this.__extends || (a = function(t, e) {
            return (a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array &&
                function(t, e) {
                    t.__proto__ = e
                } ||
                function(t, e) {
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o])
                })(t, e)
        },
        function(t, e) {
            function o() {
                this.constructor = t
            }
            a(t, e),
                t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        }),
    r = this && this.__decorate ||
    function(t, e, o, a) {
        var i, r = arguments.length,
            n = r < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, o) : a;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, a);
        else
            for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (n = (r < 3 ? i(n) : r > 3 ? i(e, o, n) : i(e, o)) || n);
        return r > 3 && n && Object.defineProperty(e, o, n),
            n
    };
Object.defineProperty(o, "__esModule", {
    value: !0
});
var n, s, c, l = cc._decorator,
    u = l.ccclass,
    p = l.property,
    g = l.disallowMultiple,
    d = l.menu,
    h = l.executionOrder,
    f = l.requireComponent,
    m = t("ListItem");
(function(t) {
    t[t.NODE = 1] = "NODE",
        t[t.PREFAB = 2] = "PREFAB"
})(n || (n = {})),
function(t) {
    t[t.NORMAL = 1] = "NORMAL",
        t[t.ADHERING = 2] = "ADHERING",
        t[t.PAGE = 3] = "PAGE"
}(s || (s = {})),
function(t) {
    t[t.NONE = 0] = "NONE",
        t[t.SINGLE = 1] = "SINGLE",
        t[t.MULT = 2] = "MULT"
}(c || (c = {}));
var y = function(t) {
    function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.templateType = n.NODE,
            e.tmpNode = null,
            e.tmpPrefab = null,
            e._slideMode = s.NORMAL,
            e.pageDistance = .3,
            e.pageChangeEvent = new cc.Component.EventHandler,
            e._virtual = !0,
            e.cyclic = !1,
            e.lackCenter = !1,
            e.lackSlide = !1,
            e._updateRate = 0,
            e.frameByFrameRenderNum = 0,
            e.renderEvent = new cc.Component.EventHandler,
            e.selectedMode = c.NONE,
            e.repeatEventSingle = !1,
            e.selectedEvent = new cc.Component.EventHandler,
            e._selectedId = -1,
            e._forceUpdate = !1,
            e._updateDone = !0,
            e._numItems = 0,
            e._inited = !1,
            e._needUpdateWidget = !1,
            e._aniDelRuning = !1,
            e._doneAfterUpdate = !1,
            e.adhering = !1,
            e._adheringBarrier = !1,
            e.curPageNum = 0,
            e
    }
    return i(e, t),
        Object.defineProperty(e.prototype, "slideMode", {
            get: function() {
                return this._slideMode
            },
            set: function(t) {
                this._slideMode = t
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "virtual", {
            get: function() {
                return this._virtual
            },
            set: function(t) {
                null != t && (this._virtual = t),
                    0 != this._numItems && this._onScrolling()
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "updateRate", {
            get: function() {
                return this._updateRate
            },
            set: function(t) {
                t >= 0 && t <= 6 && (this._updateRate = t)
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "selectedId", {
            get: function() {
                return this._selectedId
            },
            set: function(t) {
                var e, o = this;
                switch (o.selectedMode) {
                    case c.SINGLE:
                        if (!o.repeatEventSingle && t == o._selectedId) return;
                        e = o.getItemByListId(t);
                        var a = void 0;
                        if (o._selectedId >= 0 ? o._lastSelectedId = o._selectedId : o._lastSelectedId = null, o._selectedId = t, e && ((a = e.getComponent(m.default)).selected = !0), o._lastSelectedId >= 0 && o._lastSelectedId != o._selectedId) {
                            var i = o.getItemByListId(o._lastSelectedId);
                            i && (i.getComponent(m.default).selected = !1)
                        }
                        o.selectedEvent && cc.Component.EventHandler.emitEvents([o.selectedEvent], e, t % this._actualNumItems, null == o._lastSelectedId ? null : o._lastSelectedId % this._actualNumItems);
                        break;
                    case c.MULT:
                        if (!(e = o.getItemByListId(t))) return;
                        a = e.getComponent(m.default),
                            o._selectedId >= 0 && (o._lastSelectedId = o._selectedId),
                            o._selectedId = t;
                        var r = !a.selected;
                        a.selected = r;
                        var n = o.multSelected.indexOf(t);
                        r && n < 0 ? o.multSelected.push(t) : !r && n >= 0 && o.multSelected.splice(n, 1),
                            o.selectedEvent && cc.Component.EventHandler.emitEvents([o.selectedEvent], e, t % this._actualNumItems, null == o._lastSelectedId ? null : o._lastSelectedId % this._actualNumItems, r);
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "numItems", {
            get: function() {
                return this._actualNumItems
            },
            set: function(t) {
                var e = this;
                if (e.checkInited(!1))
                    if (null == t || t < 0) cc.error("numItems set the wrong::", t);
                    else if (e._actualNumItems = e._numItems = t, e._forceUpdate = !0, e._virtual) e._resizeContent(),
                    e.cyclic && (e._numItems = e._cyclicNum * e._numItems),
                    e._onScrolling(),
                    e.frameByFrameRenderNum || e.slideMode != s.PAGE || (e.curPageNum = e.nearestListId);
                else {
                    e.cyclic && (e._resizeContent(), e._numItems = e._cyclicNum * e._numItems);
                    var o = e.content.getComponent(cc.Layout);
                    if (o && (o.enabled = !0), e._delRedundantItem(), e.firstListId = 0, e.frameByFrameRenderNum > 0) {
                        for (var a = e.frameByFrameRenderNum > e._numItems ? e._numItems : e.frameByFrameRenderNum, i = 0; i < a; i++) e._createOrUpdateItem2(i);
                        e.frameByFrameRenderNum < e._numItems && (e._updateCounter = e.frameByFrameRenderNum, e._updateDone = !1)
                    } else {
                        for (i = 0; i < e._numItems; i++) e._createOrUpdateItem2(i);
                        e.displayItemNum = e._numItems
                    }
                }
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "scrollView", {
            get: function() {
                return this._scrollView
            },
            enumerable: !1,
            configurable: !0
        }),
        e.prototype.onLoad = function() {
            this._init()
        },
        e.prototype.onDestroy = function() {
            var t = this;
            cc.isValid(t._itemTmp) && t._itemTmp.destroy(),
                cc.isValid(t.tmpNode) && t.tmpNode.destroy(),
                t._pool && t._pool.clear()
        },
        e.prototype.onEnable = function() {
            this._registerEvent(),
                this._init(),
                this._aniDelRuning && (this._aniDelRuning = !1, this._aniDelItem && (this._aniDelBeforePos && (this._aniDelItem.position = this._aniDelBeforePos, delete this._aniDelBeforePos), this._aniDelBeforeScale && (this._aniDelItem.scale = this._aniDelBeforeScale, delete this._aniDelBeforeScale), delete this._aniDelItem), this._aniDelCB && (this._aniDelCB(), delete this._aniDelCB))
        },
        e.prototype.onDisable = function() {
            this._unregisterEvent()
        },
        e.prototype._registerEvent = function() {
            var t = this;
            t.node.on(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.on("touch-up", t._onTouchUp, t),
                t.node.on(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
                t.node.on("scroll-began", t._onScrollBegan, t, !0),
                t.node.on("scroll-ended", t._onScrollEnded, t, !0),
                t.node.on("scrolling", t._onScrolling, t, !0),
                t.node.on(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t)
        },
        e.prototype._unregisterEvent = function() {
            var t = this;
            t.node.off(cc.Node.EventType.TOUCH_START, t._onTouchStart, t, !0),
                t.node.off("touch-up", t._onTouchUp, t),
                t.node.off(cc.Node.EventType.TOUCH_CANCEL, t._onTouchCancelled, t, !0),
                t.node.off("scroll-began", t._onScrollBegan, t, !0),
                t.node.off("scroll-ended", t._onScrollEnded, t, !0),
                t.node.off("scrolling", t._onScrolling, t, !0),
                t.node.off(cc.Node.EventType.SIZE_CHANGED, t._onSizeChanged, t)
        },
        e.prototype._init = function() {
            var t = this;
            if (!t._inited)
                if (t._scrollView = t.node.getComponent(cc.ScrollView), t.content = t._scrollView.content, t.content) {
                    switch (t._layout = t.content.getComponent(cc.Layout), t._align = t._layout.type, t._resizeMode = t._layout.resizeMode, t._startAxis = t._layout.startAxis, t._topGap = t._layout.paddingTop, t._rightGap = t._layout.paddingRight, t._bottomGap = t._layout.paddingBottom, t._leftGap = t._layout.paddingLeft, t._columnGap = t._layout.spacingX, t._lineGap = t._layout.spacingY, t._colLineNum, t._verticalDir = t._layout.verticalDirection, t._horizontalDir = t._layout.horizontalDirection, t.setTemplateItem(cc.instantiate(t.templateType == n.PREFAB ? t.tmpPrefab : t.tmpNode)), t._slideMode != s.ADHERING && t._slideMode != s.PAGE || (t._scrollView.inertia = !1, t._scrollView._onMouseWheel = function() {}), t.virtual || (t.lackCenter = !1), t._lastDisplayData = [], t.displayData = [], t._pool = new cc.NodePool, t._forceUpdate = !1, t._updateCounter = 0, t._updateDone = !0, t.curPageNum = 0, t.cyclic && (t._scrollView._processAutoScrolling = this._processAutoScrolling.bind(t), t._scrollView._startBounceBackIfNeeded = function() {
                        return !1
                    }), t._align) {
                        case cc.Layout.Type.HORIZONTAL:
                            switch (t._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    t._alignCalcType = 1;
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    t._alignCalcType = 2;
                            }
                            break;
                        case cc.Layout.Type.VERTICAL:
                            switch (t._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    t._alignCalcType = 3;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    t._alignCalcType = 4;
                            }
                            break;
                        case cc.Layout.Type.GRID:
                            switch (t._startAxis) {
                                case cc.Layout.AxisDirection.HORIZONTAL:
                                    switch (t._verticalDir) {
                                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                            t._alignCalcType = 3;
                                            break;
                                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                            t._alignCalcType = 4;
                                    }
                                    break;
                                case cc.Layout.AxisDirection.VERTICAL:
                                    switch (t._horizontalDir) {
                                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                            t._alignCalcType = 1;
                                            break;
                                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                            t._alignCalcType = 2;
                                    }
                            }
                    }
                    t.content.removeAllChildren(),
                        t._inited = !0
                } else cc.error(t.node.name + "'s cc.ScrollView unset content!")
        },
        e.prototype._processAutoScrolling = function(t) {
            this._scrollView._autoScrollAccumulatedTime += 1 * t;
            var e = Math.min(1, this._scrollView._autoScrollAccumulatedTime / this._scrollView._autoScrollTotalTime);
            if (this._scrollView._autoScrollAttenuate) {
                var o = e - 1;
                e = o * o * o * o * o + 1
            }
            var a = this._scrollView._autoScrollStartPosition.add(this._scrollView._autoScrollTargetDelta.mul(e)),
                i = this._scrollView.getScrollEndedEventTiming(),
                r = Math.abs(e - 1) <= i;
            Math.abs(e - 1) <= this._scrollView.getScrollEndedEventTiming() && !this._scrollView._isScrollEndedWithThresholdEventFired && (this._scrollView._dispatchEvent("scroll-ended-with-threshold"), this._scrollView._isScrollEndedWithThresholdEventFired = !0),
                r && (this._scrollView._autoScrolling = !1);
            var n = a.sub(this._scrollView.getContentPosition());
            this._scrollView._moveContent(this._scrollView._clampDelta(n), r),
                this._scrollView._dispatchEvent("scrolling"),
                this._scrollView._autoScrolling || (this._scrollView._isBouncing = !1, this._scrollView._scrolling = !1, this._scrollView._dispatchEvent("scroll-ended"))
        },
        e.prototype.setTemplateItem = function(t) {
            if (t) {
                var e = this;
                e._itemTmp = t,
                    e._resizeMode == cc.Layout.ResizeMode.CHILDREN ? e._itemSize = e._layout.cellSize : e._itemSize = cc.size(t.width, t.height);
                var o = t.getComponent(m.default),
                    a = !1;
                switch (o || (a = !0), a && (e.selectedMode = c.NONE), (o = t.getComponent(cc.Widget)) && o.enabled && (e._needUpdateWidget = !0), e.selectedMode == c.MULT && (e.multSelected = []), e._align) {
                    case cc.Layout.Type.HORIZONTAL:
                        e._colLineNum = 1,
                            e._sizeType = !1;
                        break;
                    case cc.Layout.Type.VERTICAL:
                        e._colLineNum = 1,
                            e._sizeType = !0;
                        break;
                    case cc.Layout.Type.GRID:
                        switch (e._startAxis) {
                            case cc.Layout.AxisDirection.HORIZONTAL:
                                var i = e.content.width - e._leftGap - e._rightGap;
                                e._colLineNum = Math.floor((i + e._columnGap) / (e._itemSize.width + e._columnGap)),
                                    e._sizeType = !0;
                                break;
                            case cc.Layout.AxisDirection.VERTICAL:
                                var r = e.content.height - e._topGap - e._bottomGap;
                                e._colLineNum = Math.floor((r + e._lineGap) / (e._itemSize.height + e._lineGap)),
                                    e._sizeType = !1;
                        }
                }
            }
        },
        e.prototype.checkInited = function(t) {
            return void 0 === t && (t = !0), !!this._inited || (t && cc.error("List initialization not completed!"), !1)
        },
        e.prototype._resizeContent = function() {
            var t, e = this;
            switch (e._align) {
                case cc.Layout.Type.HORIZONTAL:
                    if (e._customSize) {
                        var o = e._getFixedSize(null);
                        t = e._leftGap + o.val + e._itemSize.width * (e._numItems - o.count) + e._columnGap * (e._numItems - 1) + e._rightGap
                    } else t = e._leftGap + e._itemSize.width * e._numItems + e._columnGap * (e._numItems - 1) + e._rightGap;
                    break;
                case cc.Layout.Type.VERTICAL:
                    e._customSize ? (o = e._getFixedSize(null), t = e._topGap + o.val + e._itemSize.height * (e._numItems - o.count) + e._lineGap * (e._numItems - 1) + e._bottomGap) : t = e._topGap + e._itemSize.height * e._numItems + e._lineGap * (e._numItems - 1) + e._bottomGap;
                    break;
                case cc.Layout.Type.GRID:
                    switch (e.lackCenter && (e.lackCenter = !1), e._startAxis) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            var a = Math.ceil(e._numItems / e._colLineNum);
                            t = e._topGap + e._itemSize.height * a + e._lineGap * (a - 1) + e._bottomGap;
                            break;
                        case cc.Layout.AxisDirection.VERTICAL:
                            var i = Math.ceil(e._numItems / e._colLineNum);
                            t = e._leftGap + e._itemSize.width * i + e._columnGap * (i - 1) + e._rightGap;
                    }
            }
            var r = e.content.getComponent(cc.Layout);
            if (r && (r.enabled = !1), e._allItemSize = t, e._allItemSizeNoEdge = e._allItemSize - (e._sizeType ? e._topGap + e._bottomGap : e._leftGap + e._rightGap), e.cyclic) {
                var n = e._sizeType ? e.node.height : e.node.width;
                e._cyclicPos1 = 0,
                    n -= e._cyclicPos1,
                    e._cyclicNum = Math.ceil(n / e._allItemSizeNoEdge) + 1;
                var s = e._sizeType ? e._lineGap : e._columnGap;
                e._cyclicPos2 = e._cyclicPos1 + e._allItemSizeNoEdge + s,
                    e._cyclicAllItemSize = e._allItemSize + e._allItemSizeNoEdge * (e._cyclicNum - 1) + s * (e._cyclicNum - 1),
                    e._cycilcAllItemSizeNoEdge = e._allItemSizeNoEdge * e._cyclicNum,
                    e._cycilcAllItemSizeNoEdge += s * (e._cyclicNum - 1)
            }
            e._lack = !e.cyclic && e._allItemSize < (e._sizeType ? e.node.height : e.node.width);
            var c = e._lack && e.lackCenter || !e.lackSlide ? .1 : 0,
                l = e._lack ? (e._sizeType ? e.node.height : e.node.width) - c : e.cyclic ? e._cyclicAllItemSize : e._allItemSize;
            l < 0 && (l = 0),
                e._sizeType ? e.content.height = l : e.content.width = l
        },
        e.prototype._onScrolling = function(t) {
            if (void 0 === t && (t = null), null == this.frameCount && (this.frameCount = this._updateRate), !this._forceUpdate && t && "scroll-ended" != t.type && this.frameCount > 0) this.frameCount--;
            else if (this.frameCount = this._updateRate, !this._aniDelRuning) {
                if (this.cyclic) {
                    var e = this.content.getPosition();
                    e = this._sizeType ? e.y : e.x;
                    var o = this._allItemSizeNoEdge + (this._sizeType ? this._lineGap : this._columnGap),
                        a = this._sizeType ? cc.v2(0, o) : cc.v2(o, 0);
                    switch (this._alignCalcType) {
                        case 1:
                            e > -this._cyclicPos1 ? (this.content.x = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(a))) : e < -this._cyclicPos2 && (this.content.x = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(a)));
                            break;
                        case 2:
                            e < this._cyclicPos1 ? (this.content.x = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(a))) : e > this._cyclicPos2 && (this.content.x = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(a)));
                            break;
                        case 3:
                            e < this._cyclicPos1 ? (this.content.y = this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(a))) : e > this._cyclicPos2 && (this.content.y = this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(a)));
                            break;
                        case 4:
                            e > -this._cyclicPos1 ? (this.content.y = -this._cyclicPos2, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.sub(a))) : e < -this._cyclicPos2 && (this.content.y = -this._cyclicPos1, this._scrollView.isAutoScrolling() && (this._scrollView._autoScrollStartPosition = this._scrollView._autoScrollStartPosition.add(a)));
                    }
                }
                var i, r, n, s;
                if (this._calcViewPos(), this._sizeType ? (i = this.viewTop, n = this.viewBottom) : (r = this.viewRight, s = this.viewLeft), this._virtual) {
                    this.displayData = [];
                    var c = void 0,
                        l = 0,
                        u = this._numItems - 1;
                    if (this._customSize)
                        for (var p = !1; l <= u && !p; l++) switch (c = this._calcItemPos(l), this._align) {
                            case cc.Layout.Type.HORIZONTAL:
                                c.right >= s && c.left <= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
                                break;
                            case cc.Layout.Type.VERTICAL:
                                c.bottom <= i && c.top >= n ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
                                break;
                            case cc.Layout.Type.GRID:
                                switch (this._startAxis) {
                                    case cc.Layout.AxisDirection.HORIZONTAL:
                                        c.bottom <= i && c.top >= n ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
                                        break;
                                    case cc.Layout.AxisDirection.VERTICAL:
                                        c.right >= s && c.left <= r ? this.displayData.push(c) : 0 != l && this.displayData.length > 0 && (p = !0);
                                }
                        } else {
                            var g = this._itemSize.width + this._columnGap,
                                d = this._itemSize.height + this._lineGap;
                            switch (this._alignCalcType) {
                                case 1:
                                    l = (s - this._leftGap) / g,
                                        u = (r - this._leftGap) / g;
                                    break;
                                case 2:
                                    l = (-r - this._rightGap) / g,
                                        u = (-s - this._rightGap) / g;
                                    break;
                                case 3:
                                    l = (-i - this._topGap) / d,
                                        u = (-n - this._topGap) / d;
                                    break;
                                case 4:
                                    l = (n - this._bottomGap) / d,
                                        u = (i - this._bottomGap) / d;
                            }
                            for (l = Math.floor(l) * this._colLineNum, u = Math.ceil(u) * this._colLineNum, l < 0 && (l = 0), --u >= this._numItems && (u = this._numItems - 1); l <= u; l++) this.displayData.push(this._calcItemPos(l))
                        }
                    if (this._delRedundantItem(), this.displayData.length <= 0 || !this._numItems) return void(this._lastDisplayData = []);
                    this.firstListId = this.displayData[0].id,
                        this.displayItemNum = this.displayData.length;
                    var h = this._lastDisplayData.length,
                        f = this.displayItemNum != h;
                    if (f && (this.frameByFrameRenderNum > 0 && this._lastDisplayData.sort(function(t, e) {
                            return t - e
                        }), f = this.firstListId != this._lastDisplayData[0] || this.displayData[this.displayItemNum - 1].id != this._lastDisplayData[h - 1]), this._forceUpdate || f)
                        if (this.frameByFrameRenderNum > 0) this._numItems > 0 ? (this._updateDone ? this._updateCounter = 0 : this._doneAfterUpdate = !0, this._updateDone = !1) : (this._updateCounter = 0, this._updateDone = !0);
                        else {
                            this._lastDisplayData = [];
                            for (var m = 0; m < this.displayItemNum; m++) this._createOrUpdateItem(this.displayData[m]);
                            this._forceUpdate = !1
                        }
                    this._calcNearestItem()
                }
            }
        },
        e.prototype._calcViewPos = function() {
            var t = this.content.getPosition();
            switch (this._alignCalcType) {
                case 1:
                    this.elasticLeft = t.x > 0 ? t.x : 0,
                        this.viewLeft = (t.x < 0 ? -t.x : 0) - this.elasticLeft,
                        this.viewRight = this.viewLeft + this.node.width,
                        this.elasticRight = this.viewRight > this.content.width ? Math.abs(this.viewRight - this.content.width) : 0,
                        this.viewRight += this.elasticRight;
                    break;
                case 2:
                    this.elasticRight = t.x < 0 ? -t.x : 0,
                        this.viewRight = (t.x > 0 ? -t.x : 0) + this.elasticRight,
                        this.viewLeft = this.viewRight - this.node.width,
                        this.elasticLeft = this.viewLeft < -this.content.width ? Math.abs(this.viewLeft + this.content.width) : 0,
                        this.viewLeft -= this.elasticLeft;
                    break;
                case 3:
                    this.elasticTop = t.y < 0 ? Math.abs(t.y) : 0,
                        this.viewTop = (t.y > 0 ? -t.y : 0) + this.elasticTop,
                        this.viewBottom = this.viewTop - this.node.height,
                        this.elasticBottom = this.viewBottom < -this.content.height ? Math.abs(this.viewBottom + this.content.height) : 0,
                        this.viewBottom += this.elasticBottom;
                    break;
                case 4:
                    this.elasticBottom = t.y > 0 ? Math.abs(t.y) : 0,
                        this.viewBottom = (t.y < 0 ? -t.y : 0) - this.elasticBottom,
                        this.viewTop = this.viewBottom + this.node.height,
                        this.elasticTop = this.viewTop > this.content.height ? Math.abs(this.viewTop - this.content.height) : 0,
                        this.viewTop -= this.elasticTop;
            }
        },
        e.prototype._calcItemPos = function(t) {
            var e, o, a, i, r, n, s, c;
            switch (this._align) {
                case cc.Layout.Type.HORIZONTAL:
                    switch (this._horizontalDir) {
                        case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                            if (this._customSize) {
                                var l = this._getFixedSize(t);
                                r = this._leftGap + (this._itemSize.width + this._columnGap) * (t - l.count) + (l.val + this._columnGap * l.count),
                                    e = (u = this._customSize[t]) > 0 ? u : this._itemSize.width
                            } else r = this._leftGap + (this._itemSize.width + this._columnGap) * t,
                                e = this._itemSize.width;
                            return this.lackCenter && (r -= this._leftGap, r += this.content.width / 2 - this._allItemSizeNoEdge / 2), {
                                id: t,
                                left: r,
                                right: n = r + e,
                                x: r + this._itemTmp.anchorX * e,
                                y: this._itemTmp.y
                            };
                        case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                            return this._customSize ? (l = this._getFixedSize(t), n = -this._rightGap - (this._itemSize.width + this._columnGap) * (t - l.count) - (l.val + this._columnGap * l.count), e = (u = this._customSize[t]) > 0 ? u : this._itemSize.width) : (n = -this._rightGap - (this._itemSize.width + this._columnGap) * t, e = this._itemSize.width),
                                this.lackCenter && (n += this._rightGap, n -= this.content.width / 2 - this._allItemSizeNoEdge / 2), {
                                    id: t,
                                    right: n,
                                    left: r = n - e,
                                    x: r + this._itemTmp.anchorX * e,
                                    y: this._itemTmp.y
                                };
                    }
                    break;
                case cc.Layout.Type.VERTICAL:
                    switch (this._verticalDir) {
                        case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                            return this._customSize ? (l = this._getFixedSize(t), a = -this._topGap - (this._itemSize.height + this._lineGap) * (t - l.count) - (l.val + this._lineGap * l.count), o = (u = this._customSize[t]) > 0 ? u : this._itemSize.height) : (a = -this._topGap - (this._itemSize.height + this._lineGap) * t, o = this._itemSize.height),
                                this.lackCenter && (a += this._topGap, a -= this.content.height / 2 - this._allItemSizeNoEdge / 2), {
                                    id: t,
                                    top: a,
                                    bottom: i = a - o,
                                    x: this._itemTmp.x,
                                    y: i + this._itemTmp.anchorY * o
                                };
                        case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                            var u;
                            if (this._customSize) l = this._getFixedSize(t),
                                i = this._bottomGap + (this._itemSize.height + this._lineGap) * (t - l.count) + (l.val + this._lineGap * l.count),
                                o = (u = this._customSize[t]) > 0 ? u : this._itemSize.height;
                            else i = this._bottomGap + (this._itemSize.height + this._lineGap) * t,
                                o = this._itemSize.height;
                            return this.lackCenter && (i -= this._bottomGap, i += this.content.height / 2 - this._allItemSizeNoEdge / 2), {
                                id: t,
                                top: a = i + o,
                                bottom: i,
                                x: this._itemTmp.x,
                                y: i + this._itemTmp.anchorY * o
                            };
                    }
                case cc.Layout.Type.GRID:
                    var p = Math.floor(t / this._colLineNum);
                    switch (this._startAxis) {
                        case cc.Layout.AxisDirection.HORIZONTAL:
                            switch (this._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    c = (i = (a = -this._topGap - (this._itemSize.height + this._lineGap) * p) - this._itemSize.height) + this._itemTmp.anchorY * this._itemSize.height;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    a = (i = this._bottomGap + (this._itemSize.height + this._lineGap) * p) + this._itemSize.height,
                                        c = i + this._itemTmp.anchorY * this._itemSize.height;
                            }
                            switch (s = this._leftGap + t % this._colLineNum * (this._itemSize.width + this._columnGap), this._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    s += this._itemTmp.anchorX * this._itemSize.width,
                                        s -= this.content.anchorX * this.content.width;
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    s += (1 - this._itemTmp.anchorX) * this._itemSize.width,
                                        s -= (1 - this.content.anchorX) * this.content.width,
                                        s *= -1;
                            }
                            return {
                                id: t,
                                top: a,
                                bottom: i,
                                x: s,
                                y: c
                            };
                        case cc.Layout.AxisDirection.VERTICAL:
                            switch (this._horizontalDir) {
                                case cc.Layout.HorizontalDirection.LEFT_TO_RIGHT:
                                    n = (r = this._leftGap + (this._itemSize.width + this._columnGap) * p) + this._itemSize.width,
                                        s = r + this._itemTmp.anchorX * this._itemSize.width,
                                        s -= this.content.anchorX * this.content.width;
                                    break;
                                case cc.Layout.HorizontalDirection.RIGHT_TO_LEFT:
                                    s = (r = (n = -this._rightGap - (this._itemSize.width + this._columnGap) * p) - this._itemSize.width) + this._itemTmp.anchorX * this._itemSize.width,
                                        s += (1 - this.content.anchorX) * this.content.width;
                            }
                            switch (c = -this._topGap - t % this._colLineNum * (this._itemSize.height + this._lineGap), this._verticalDir) {
                                case cc.Layout.VerticalDirection.TOP_TO_BOTTOM:
                                    c -= (1 - this._itemTmp.anchorY) * this._itemSize.height,
                                        c += (1 - this.content.anchorY) * this.content.height;
                                    break;
                                case cc.Layout.VerticalDirection.BOTTOM_TO_TOP:
                                    c -= this._itemTmp.anchorY * this._itemSize.height,
                                        c += this.content.anchorY * this.content.height,
                                        c *= -1;
                            }
                            return {
                                id: t,
                                left: r,
                                right: n,
                                x: s,
                                y: c
                            };
                    }
            }
        },
        e.prototype._calcExistItemPos = function(t) {
            var e = this.getItemByListId(t);
            if (!e) return null;
            var o = {
                id: t,
                x: e.x,
                y: e.y
            };
            return this._sizeType ? (o.top = e.y + e.height * (1 - e.anchorY), o.bottom = e.y - e.height * e.anchorY) : (o.left = e.x - e.width * e.anchorX, o.right = e.x + e.width * (1 - e.anchorX)),
                o
        },
        e.prototype.getItemPos = function(t) {
            return this._virtual ? this._calcItemPos(t) : this.frameByFrameRenderNum ? this._calcItemPos(t) : this._calcExistItemPos(t)
        },
        e.prototype._getFixedSize = function(t) {
            if (!this._customSize) return null;
            null == t && (t = this._numItems);
            var e = 0,
                o = 0;
            for (var a in this._customSize) parseInt(a) < t && (e += this._customSize[a], o++);
            return {
                val: e,
                count: o
            }
        },
        e.prototype._onScrollBegan = function() {
            this._beganPos = this._sizeType ? this.viewTop : this.viewLeft
        },
        e.prototype._onScrollEnded = function() {
            var t = this;
            if (t.curScrollIsTouch = !1, null != t.scrollToListId) {
                var e = t.getItemByListId(t.scrollToListId);
                t.scrollToListId = null,
                    e && cc.tween(e).to(.1, {
                        scale: 1.06
                    }).to(.1, {
                        scale: 1
                    }).start()
            }
            t._onScrolling(),
                t._slideMode != s.ADHERING || t.adhering ? t._slideMode == s.PAGE && (null != t._beganPos && t.curScrollIsTouch ? this._pageAdhere() : t.adhere()) : t.adhere()
        },
        e.prototype._onTouchStart = function(t, e) {
            if (!this._scrollView.hasNestedViewGroup(t, e) && (this.curScrollIsTouch = !0, t.eventPhase !== cc.Event.AT_TARGET || t.target !== this.node)) {
                for (var o = t.target; null == o._listId && o.parent;) o = o.parent;
                this._scrollItem = null != o._listId ? o : t.target
            }
        },
        e.prototype._onTouchUp = function() {
            var t = this;
            t._scrollPos = null,
                t._slideMode == s.ADHERING ? (this.adhering && (this._adheringBarrier = !0), t.adhere()) : t._slideMode == s.PAGE && (null != t._beganPos ? this._pageAdhere() : t.adhere()),
                this._scrollItem = null
        },
        e.prototype._onTouchCancelled = function(t, e) {
            var o = this;
            o._scrollView.hasNestedViewGroup(t, e) || t.simulate || (o._scrollPos = null, o._slideMode == s.ADHERING ? (o.adhering && (o._adheringBarrier = !0), o.adhere()) : o._slideMode == s.PAGE && (null != o._beganPos ? o._pageAdhere() : o.adhere()), this._scrollItem = null)
        },
        e.prototype._onSizeChanged = function() {
            this.checkInited(!1) && this._onScrolling()
        },
        e.prototype._onItemAdaptive = function(t) {
            if (!this._sizeType && t.width != this._itemSize.width || this._sizeType && t.height != this._itemSize.height) {
                this._customSize || (this._customSize = {});
                var e = this._sizeType ? t.height : t.width;
                this._customSize[t._listId] != e && (this._customSize[t._listId] = e, this._resizeContent(), this.updateAll(), null != this._scrollToListId && (this._scrollPos = null, this.unschedule(this._scrollToSo), this.scrollTo(this._scrollToListId, Math.max(0, this._scrollToEndTime - new Date().getTime() / 1e3))))
            }
        },
        e.prototype._pageAdhere = function() {
            var t = this;
            if (t.cyclic || !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
                var e = t._sizeType ? t.viewTop : t.viewLeft,
                    o = (t._sizeType ? t.node.height : t.node.width) * t.pageDistance;
                if (Math.abs(t._beganPos - e) > o) switch (t._alignCalcType) {
                    case 1:
                    case 4:
                        t._beganPos > e ? t.prePage(.5) : t.nextPage(.5);
                        break;
                    case 2:
                    case 3:
                        t._beganPos < e ? t.prePage(.5) : t.nextPage(.5);
                } else t.elasticTop <= 0 && t.elasticRight <= 0 && t.elasticBottom <= 0 && t.elasticLeft <= 0 && t.adhere();
                t._beganPos = null
            }
        },
        e.prototype.adhere = function() {
            var t = this;
            if (t.checkInited() && !(t.elasticTop > 0 || t.elasticRight > 0 || t.elasticBottom > 0 || t.elasticLeft > 0)) {
                t.adhering = !0,
                    t._calcNearestItem();
                var e = (t._sizeType ? t._topGap : t._leftGap) / (t._sizeType ? t.node.height : t.node.width);
                t.scrollTo(t.nearestListId, .7, e)
            }
        },
        e.prototype.update = function() {
            if (!(this.frameByFrameRenderNum <= 0 || this._updateDone))
                if (this._virtual) {
                    for (var t = this._updateCounter + this.frameByFrameRenderNum > this.displayItemNum ? this.displayItemNum : this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) {
                        var o = this.displayData[e];
                        o && this._createOrUpdateItem(o)
                    }
                    this._updateCounter >= this.displayItemNum - 1 ? this._doneAfterUpdate ? (this._updateCounter = 0, this._updateDone = !1, this._doneAfterUpdate = !1) : (this._updateDone = !0, this._delRedundantItem(), this._forceUpdate = !1, this._calcNearestItem(), this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId)) : this._updateCounter += this.frameByFrameRenderNum
                } else if (this._updateCounter < this._numItems) {
                for (t = this._updateCounter + this.frameByFrameRenderNum > this._numItems ? this._numItems : this._updateCounter + this.frameByFrameRenderNum, e = this._updateCounter; e < t; e++) this._createOrUpdateItem2(e);
                this._updateCounter += this.frameByFrameRenderNum
            } else this._updateDone = !0,
                this._calcNearestItem(),
                this.slideMode == s.PAGE && (this.curPageNum = this.nearestListId)
        },
        e.prototype._createOrUpdateItem = function(t) {
            var e = this.getItemByListId(t.id);
            if (e) this._forceUpdate && this.renderEvent && (e.setPosition(cc.v2(t.x, t.y)), this._resetItemSize(e), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems));
            else {
                var o = this._pool.size() > 0;
                if (e = o ? this._pool.get() : cc.instantiate(this._itemTmp), o && cc.isValid(e) || (e = cc.instantiate(this._itemTmp), o = !1), e._listId != t.id && (e._listId = t.id, e.setContentSize(this._itemSize)), e.setPosition(cc.v2(t.x, t.y)), this._resetItemSize(e), this.content.addChild(e), o && this._needUpdateWidget) {
                    var a = e.getComponent(cc.Widget);
                    a && a.updateAlignment()
                }
                e.setSiblingIndex(this.content.childrenCount - 1);
                var i = e.getComponent(m.default);
                e.listItem = i,
                    i && (i.listId = t.id, i.list = this, i._registerEvent()),
                    this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], e, t.id % this._actualNumItems)
            }
            this._resetItemSize(e),
                this._updateListItem(e.listItem),
                this._lastDisplayData.indexOf(t.id) < 0 && this._lastDisplayData.push(t.id)
        },
        e.prototype._createOrUpdateItem2 = function(t) {
            var e, o = this.content.children[t];
            o ? this._forceUpdate && this.renderEvent && (o._listId = t, e && (e.listId = t), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems)) : ((o = cc.instantiate(this._itemTmp))._listId = t, this.content.addChild(o), e = o.getComponent(m.default), o.listItem = e, e && (e.listId = t, e.list = this, e._registerEvent()), this.renderEvent && cc.Component.EventHandler.emitEvents([this.renderEvent], o, t % this._actualNumItems)),
                this._updateListItem(e),
                this._lastDisplayData.indexOf(t) < 0 && this._lastDisplayData.push(t)
        },
        e.prototype._updateListItem = function(t) {
            if (t && this.selectedMode > c.NONE) {
                var e = t.node;
                switch (this.selectedMode) {
                    case c.SINGLE:
                        t.selected = this.selectedId == e._listId;
                        break;
                    case c.MULT:
                        t.selected = this.multSelected.indexOf(e._listId) >= 0;
                }
            }
        },
        e.prototype._resetItemSize = function() {},
        e.prototype._updateItemPos = function(t) {
            var e = isNaN(t) ? t : this.getItemByListId(t),
                o = this.getItemPos(e._listId);
            e.setPosition(o.x, o.y)
        },
        e.prototype.setMultSelected = function(t, e) {
            var o = this;
            if (o.checkInited()) {
                if (Array.isArray(t) || (t = [t]), null == e) o.multSelected = t;
                else {
                    var a = void 0,
                        i = void 0;
                    if (e)
                        for (var r = t.length - 1; r >= 0; r--) a = t[r],
                            (i = o.multSelected.indexOf(a)) < 0 && o.multSelected.push(a);
                    else
                        for (r = t.length - 1; r >= 0; r--) a = t[r],
                            (i = o.multSelected.indexOf(a)) >= 0 && o.multSelected.splice(i, 1)
                }
                o._forceUpdate = !0,
                    o._onScrolling()
            }
        },
        e.prototype.getMultSelected = function() {
            return this.multSelected
        },
        e.prototype.hasMultSelected = function(t) {
            return this.multSelected && this.multSelected.indexOf(t) >= 0
        },
        e.prototype.updateItem = function(t) {
            if (this.checkInited()) {
                Array.isArray(t) || (t = [t]);
                for (var e = 0,
                        o = t.length; e < o; e++) {
                    var a = t[e],
                        i = this.getItemByListId(a);
                    i && cc.Component.EventHandler.emitEvents([this.renderEvent], i, a % this._actualNumItems)
                }
            }
        },
        e.prototype.updateAll = function() {
            this.checkInited() && (this.numItems = this.numItems)
        },
        e.prototype.getItemByListId = function(t) {
            if (this.content)
                for (var e = this.content.childrenCount - 1; e >= 0; e--) {
                    var o = this.content.children[e];
                    if (o._listId == t) return o
                }
        },
        e.prototype._getOutsideItem = function() {
            for (var t, e = [], o = this.content.childrenCount - 1; o >= 0; o--) t = this.content.children[o],
                this.displayData.find(function(e) {
                    return e.id == t._listId
                }) || e.push(t);
            return e
        },
        e.prototype._delRedundantItem = function() {
            if (this._virtual)
                for (var t = this._getOutsideItem(), e = t.length - 1; e >= 0; e--) {
                    var o = t[e];
                    if (!this._scrollItem || o._listId != this._scrollItem._listId) {
                        o.isCached = !0,
                            this._pool.put(o);
                        for (var a = this._lastDisplayData.length - 1; a >= 0; a--)
                            if (this._lastDisplayData[a] == o._listId) {
                                this._lastDisplayData.splice(a, 1);
                                break
                            }
                    }
                } else
                    for (; this.content.childrenCount > this._numItems;) this._delSingleItem(this.content.children[this.content.childrenCount - 1])
        },
        e.prototype._delSingleItem = function(t) {
            t.removeFromParent(),
                t.destroy && t.destroy(),
                t = null
        },
        e.prototype.aniDelItem = function(t, e, o) {
            var a = this;
            if (!a.checkInited() || a.cyclic || !a._virtual) return cc.error("This function is not allowed to be called!");
            if (!e) return cc.error("CallFunc are not allowed to be NULL, You need to delete the corresponding index in the data array in the CallFunc!");
            if (a._aniDelRuning) return cc.warn("Please wait for the current deletion to finish!");
            var i, r = a.getItemByListId(t);
            if (r) {
                i = r.getComponent(m.default),
                    a._aniDelRuning = !0,
                    a._aniDelCB = e,
                    a._aniDelItem = r,
                    a._aniDelBeforePos = r.position,
                    a._aniDelBeforeScale = r.scale;
                var n = a.displayData[a.displayData.length - 1].id,
                    s = i.selected;
                i.showAni(o,
                    function() {
                        var o, i, l;
                        if (n < a._numItems - 2 && (o = n + 1), null != o) {
                            var u = a._calcItemPos(o);
                            a.displayData.push(u),
                                a._virtual ? a._createOrUpdateItem(u) : a._createOrUpdateItem2(o)
                        } else a._numItems--;
                        if (a.selectedMode == c.SINGLE) s ? a._selectedId = -1 : a._selectedId - 1 >= 0 && a._selectedId--;
                        else if (a.selectedMode == c.MULT && a.multSelected.length) {
                            var p = a.multSelected.indexOf(t);
                            p >= 0 && a.multSelected.splice(p, 1);
                            for (var g = a.multSelected.length - 1; g >= 0; g--)(f = a.multSelected[g]) >= t && a.multSelected[g]--
                        }
                        if (a._customSize) {
                            a._customSize[t] && delete a._customSize[t];
                            var d = {},
                                h = void 0;
                            for (var f in a._customSize) {
                                h = a._customSize[f];
                                var m = parseInt(f);
                                d[m - (m >= t ? 1 : 0)] = h
                            }
                            a._customSize = d
                        }
                        for (g = null != o ? o : n; g >= t + 1; g--)
                            if (r = a.getItemByListId(g)) {
                                var y = a._calcItemPos(g - 1);
                                i = cc.tween(r).to(.2333, {
                                        position: cc.v2(y.x, y.y)
                                    }),
                                    g <= t + 1 && (l = !0, i.call(function() {
                                        a._aniDelRuning = !1,
                                            e(t),
                                            delete a._aniDelCB
                                    })),
                                    i.start()
                            }
                        l || (a._aniDelRuning = !1, e(t), a._aniDelCB = null)
                    }, !0)
            } else e(t)
        },
        e.prototype.scrollTo = function(t, e, o, a) {
            void 0 === e && (e = .5),
                void 0 === o && (o = null),
                void 0 === a && (a = !1);
            var i = this;
            if (i.checkInited(!1)) {
                null == e ? e = .5 : e < 0 && (e = 0),
                    t < 0 ? t = 0 : t >= i._numItems && (t = i._numItems - 1), !i._virtual && i._layout && i._layout.enabled && i._layout.updateLayout();
                var r, n, s = i.getItemPos(t);
                if (!s) return !1;
                switch (i._alignCalcType) {
                    case 1:
                        r = s.left,
                            r -= null != o ? i.node.width * o : i._leftGap,
                            s = cc.v2(r, 0);
                        break;
                    case 2:
                        r = s.right - i.node.width,
                            r += null != o ? i.node.width * o : i._rightGap,
                            s = cc.v2(r + i.content.width, 0);
                        break;
                    case 3:
                        n = s.top,
                            n += null != o ? i.node.height * o : i._topGap,
                            s = cc.v2(0, -n);
                        break;
                    case 4:
                        n = s.bottom + i.node.height,
                            n -= null != o ? i.node.height * o : i._bottomGap,
                            s = cc.v2(0, -n + i.content.height);
                }
                var c = i.content.getPosition();
                c = Math.abs(i._sizeType ? c.y : c.x);
                var l = i._sizeType ? s.y : s.x;
                Math.abs((null != i._scrollPos ? i._scrollPos : c) - l) > .5 && (i._scrollView.scrollToOffset(s, e), i._scrollToListId = t, i._scrollToEndTime = new Date().getTime() / 1e3 + e, i._scrollToSo = i.scheduleOnce(function() {
                        if (i._adheringBarrier || (i.adhering = i._adheringBarrier = !1), i._scrollPos = i._scrollToListId = i._scrollToEndTime = i._scrollToSo = null, a) {
                            var e = i.getItemByListId(t);
                            e && cc.tween(e).to(.1, {
                                scale: 1.05
                            }).to(.1, {
                                scale: 1
                            }).start()
                        }
                    },
                    e + .1), e <= 0 && i._onScrolling())
            }
        },
        e.prototype._calcNearestItem = function() {
            var t, e, o, a, i, r, n = this;
            n.nearestListId = null,
                n._virtual && n._calcViewPos(),
                o = n.viewTop,
                a = n.viewRight,
                i = n.viewBottom,
                r = n.viewLeft;
            for (var s = !1,
                    c = 0; c < n.content.childrenCount && !s; c += n._colLineNum)
                if (t = n._virtual ? n.displayData[c] : n._calcExistItemPos(c)) switch (e = n._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, n._alignCalcType) {
                    case 1:
                        t.right >= r && (n.nearestListId = t.id, r > e && (n.nearestListId += n._colLineNum), s = !0);
                        break;
                    case 2:
                        t.left <= a && (n.nearestListId = t.id, a < e && (n.nearestListId += n._colLineNum), s = !0);
                        break;
                    case 3:
                        t.bottom <= o && (n.nearestListId = t.id, o < e && (n.nearestListId += n._colLineNum), s = !0);
                        break;
                    case 4:
                        t.top >= i && (n.nearestListId = t.id, i > e && (n.nearestListId += n._colLineNum), s = !0);
                }
            if ((t = n._virtual ? n.displayData[n.displayItemNum - 1] : n._calcExistItemPos(n._numItems - 1)) && t.id == n._numItems - 1) switch (e = n._sizeType ? (t.top + t.bottom) / 2 : e = (t.left + t.right) / 2, n._alignCalcType) {
                case 1:
                    a > e && (n.nearestListId = t.id);
                    break;
                case 2:
                    r < e && (n.nearestListId = t.id);
                    break;
                case 3:
                    i < e && (n.nearestListId = t.id);
                    break;
                case 4:
                    o > e && (n.nearestListId = t.id);
            }
        },
        e.prototype.prePage = function(t) {
            void 0 === t && (t = .5),
                this.checkInited() && this.skipPage(this.curPageNum - 1, t)
        },
        e.prototype.nextPage = function(t) {
            void 0 === t && (t = .5),
                this.checkInited() && this.skipPage(this.curPageNum + 1, t)
        },
        e.prototype.skipPage = function(t, e) {
            var o = this;
            if (o.checkInited()) return o._slideMode != s.PAGE ? cc.error("This function is not allowed to be called, Must SlideMode = PAGE!") : void(t < 0 || t >= o._numItems || o.curPageNum != t && (o.curPageNum = t, o.pageChangeEvent && cc.Component.EventHandler.emitEvents([o.pageChangeEvent], t), o.scrollTo(t, e)))
        },
        e.prototype.calcCustomSize = function(t) {
            var e = this;
            if (e.checkInited()) {
                if (!e._itemTmp) return cc.error("Unset template item!");
                if (!e.renderEvent) return cc.error("Unset Render-Event!");
                e._customSize = {};
                var o = cc.instantiate(e._itemTmp);
                e.content.addChild(o);
                for (var a = 0; a < t; a++) cc.Component.EventHandler.emitEvents([e.renderEvent], o, a),
                    o.height == e._itemSize.height && o.width == e._itemSize.width || (e._customSize[a] = e._sizeType ? o.height : o.width);
                return Object.keys(e._customSize).length || (e._customSize = null),
                    o.removeFromParent(),
                    o.destroy && o.destroy(),
                    e._customSize
            }
        },
        r([p({
            type: cc.Enum(n)
        })], e.prototype, "templateType", void 0),
        r([p({
            type: cc.Node,
            visible: function() {
                return this.templateType == n.NODE
            }
        })], e.prototype, "tmpNode", void 0),
        r([p({
            type: cc.Prefab,
            visible: function() {
                return this.templateType == n.PREFAB
            }
        })], e.prototype, "tmpPrefab", void 0),
        r([p()], e.prototype, "_slideMode", void 0),
        r([p({
            type: cc.Enum(s)
        })], e.prototype, "slideMode", null),
        r([p({
            type: cc.Float,
            range: [0, 1, .1],
            slide: !0,
            visible: function() {
                return this._slideMode == s.PAGE
            }
        })], e.prototype, "pageDistance", void 0),
        r([p({
            type: cc.Component.EventHandler,
            visible: function() {
                return this._slideMode == s.PAGE
            }
        })], e.prototype, "pageChangeEvent", void 0),
        r([p()], e.prototype, "_virtual", void 0),
        r([p({
            type: cc.Boolean
        })], e.prototype, "virtual", null),
        r([p({

            visible: function() {
                var t = this.slideMode == s.NORMAL;
                return t || (this.cyclic = !1),
                    t
            }
        })], e.prototype, "cyclic", void 0),
        r([p({

            visible: function() {
                return this.virtual
            }
        })], e.prototype, "lackCenter", void 0),
        r([p({

            visible: function() {
                var t = this.virtual && !this.lackCenter;
                return t || (this.lackSlide = !1),
                    t
            }
        })], e.prototype, "lackSlide", void 0),
        r([p({
            type: cc.Integer
        })], e.prototype, "_updateRate", void 0),
        r([p({
            type: cc.Integer,
            range: [0, 6, 1],
            slide: !0
        })], e.prototype, "updateRate", null),
        r([p({
            type: cc.Integer,
            range: [0, 12, 1],
            slide: !0
        })], e.prototype, "frameByFrameRenderNum", void 0),
        r([p({
            type: cc.Component.EventHandler
        })], e.prototype, "renderEvent", void 0),
        r([p({
            type: cc.Enum(c)
        })], e.prototype, "selectedMode", void 0),
        r([p({

            visible: function() {
                return this.selectedMode == c.SINGLE
            }
        })], e.prototype, "repeatEventSingle", void 0),
        r([p({
            type: cc.Component.EventHandler,
            visible: function() {
                return this.selectedMode > c.NONE
            }
        })], e.prototype, "selectedEvent", void 0),
        r([p({
            serializable: !1
        })], e.prototype, "_numItems", void 0),
        r([u, g(), d("自定义组件/List"), f(cc.ScrollView), h(-5e3)], e)
}(cc.Component);
o.default = y