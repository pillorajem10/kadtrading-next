import { colorNames, colorShades } from 'constant';

const hotpot = () => {
    let color, rgby, hsly;
    let looper = colorNames;
    
    for (var i = 0; i < colorNames.length; i++) {
        color = "#" + colorNames[i][0];
        rgby = rgb(color);
        hsly = hsl(color);
        looper[i].push(rgby[0], rgby[1], rgby[2], hsly[0], hsly[1], hsly[2]);
    }
    return looper;
};

const shadergb = (shadename) => {
    for(var i = 0; i < colorShades.length; i++) {
        if(shadename == colorShades[i][1])
        return "#" + colorShades[i][0];
    }
    return "#000000";
};

// adopted from: Farbtastic 1.2
// http://acko.net/dev/farbtastic
const hsl = (color) => {
    var rgb = [parseInt('0x' + color.substring(1, 3)) / 255, parseInt('0x' + color.substring(3, 5)) / 255, parseInt('0x' + color.substring(5, 7)) / 255];
    var min, max, delta, h, s, l;
    var r = rgb[0], g = rgb[1], b = rgb[2];

    min = Math.min(r, Math.min(g, b));
    max = Math.max(r, Math.max(g, b));
    delta = max - min;
    l = (min + max) / 2;

    s = 0;
    if(l > 0 && l < 1)
        s = delta / (l < 0.5 ? (2 * l) : (2 - 2 * l));

    h = 0;
    if(delta > 0)
    {
        if (max == r && max != g) h += (g - b) / delta;
        if (max == g && max != b) h += (2 + (b - r) / delta);
        if (max == b && max != r) h += (4 + (r - g) / delta);
        h /= 6;
    }
    return [parseInt(h * 255), parseInt(s * 255), parseInt(l * 255)];
};

// adopted from: Farbtastic 1.2
// http://acko.net/dev/farbtastic
const rgb = (color) => {
    return [parseInt('0x' + color.substring(1, 3)), parseInt('0x' + color.substring(3, 5)),  parseInt('0x' + color.substring(5, 7))];
};

export const getColorDetailsByText = (v) => {
    const color = colorShades.find(arrColor => arrColor[1] === v);
    return color ? `#${color[0]}` : '';
}

export const getColorDetails = (v) => {
    let color = v.toUpperCase();
    if (color.length < 3 || color.length > 7)
        return ["#000000", "Invalid Color: " + color, "#000000", "", false];
    if (color.length % 3 == 0)
        color = "#" + color;
    if (color.length == 4)
        color = "#" + color.substr(1, 1) + color.substr(1, 1) + color.substr(2, 1) + color.substr(2, 1) + color.substr(3, 1) + color.substr(3, 1);

    var rgby = rgb(color);
    var r = rgby[0], g = rgby[1], b = rgby[2];
    var hsly = hsl(color);
    var h = hsly[0], s = hsly[1], l = hsly[2];
    var ndf1 = 0, ndf2 = 0, ndf = 0;
    var cl = -1, df = -1;

    for(var i = 0; i < colorNames.length; i++)
    {
        if (color == "#" + colorNames[i][0])
        return ["#" + colorNames[i][0], colorNames[i][1], shadergb(colorNames[i][2]), colorNames[i][2], true];

        ndf1 = Math.pow(r - colorNames[i][3], 2) + Math.pow(g - colorNames[i][4], 2) + Math.pow(b - colorNames[i][5], 2);
        ndf2 = Math.abs(Math.pow(h - colorNames[i][6], 2)) + Math.pow(s - colorNames[i][7], 2) + Math.abs(Math.pow(l - colorNames[i][8], 2));
        ndf = ndf1 + ndf2 * 2;
        if(df < 0 || df > ndf)
        {
        df = ndf;
        cl = i;
        }
    }

    return (cl < 0
        ? ["#000000", "Invalid Color: " + color, "#000000", "", false]
        : ["#" + colorNames[cl][0], colorNames[cl][1], shadergb(colorNames[cl][2]), colorNames[cl][2], false]);
};
