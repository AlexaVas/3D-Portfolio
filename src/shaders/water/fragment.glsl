uniform vec3 uColorStart;
uniform vec3 uColorEnd;

varying float vElevation;

void main()
{
    float strength = clamp(vElevation,0.0,1.0);
    vec3 color = mix(uColorEnd,uColorStart, strength);
    gl_FragColor = vec4(color,1.0);

}