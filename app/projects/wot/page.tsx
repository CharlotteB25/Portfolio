"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

// ------------ Utilities ------------
const cx = (...classes: Array<string | false | undefined | null>) =>
  classes.filter(Boolean).join(" ");

// ------------ CodeSnippet ------------
function CodeSnippet({
  code,
  language = "ts",
  label,
}: {
  code: string;
  language?: string;
  label?: string;
}) {
  const preRef = useRef<HTMLPreElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      const range = document.createRange();
      if (preRef.current) {
        range.selectNodeContents(preRef.current);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
        try {
          document.execCommand("copy");
          setCopied(true);
        } catch {}
        sel?.removeAllRanges();
      }
    }
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden border border-blood/90 bg-paper/70">
      <div className="flex items-center justify-between px-4 py-2 text-sm text-ink--700 bg-paper">
        <span className="uppercase tracking-wide">{label ?? language}</span>
        <button
          onClick={copy}
          className={cx(
            "btn btn-primary rounded-xl px-3 py-1 text-xs font-semibold",
            copied && "opacity-90"
          )}
          aria-live="polite"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>
      <pre
        ref={preRef}
        className="p-4 overflow-auto text-xs sm:text-sm leading-relaxed text-ink bg-paper"
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}

// ------------ Collapsible Code Wrapper ------------
function CollapsibleCode({
  title,
  code,
  language,
  defaultOpen = false,
}: {
  title: string;
  code: string;
  language?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="wave-card p-4 sm:p-5 space-y-3">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left"
      >
        <div>
          <h3 className="text-sm font-semibold text-ink-700">{title}</h3>
          <p className="text-[11px] sm:text-xs text-ink-500">
            {open
              ? "Hide implementation details"
              : "Show implementation details"}
          </p>
        </div>
        <span
          className={cx(
            "ml-3 inline-flex h-6 w-6 items-center justify-center rounded-full border border-blood text-[10px] transition-transform",
            open ? "rotate-90" : ""
          )}
        >
          ▶
        </span>
      </button>
      {open && (
        <div>
          <CodeSnippet code={code} language={language} label={language} />
        </div>
      )}
    </div>
  );
}

// ------------ Lightbox ------------
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    ref.current?.showModal();
    ref.current?.focus();
  }, []);

  return (
    <dialog
      ref={ref}
      className="backdrop:bg-black/70 rounded-xl p-0 m-0"
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
    >
      <div className="relative">
        <button
          onClick={() => ref.current?.close()}
          aria-label="Close image"
          className="absolute top-3 right-3 btn btn-primary rounded-full px-3 py-1 text-xs"
        >
          Close
        </button>
        <img
          src={src}
          alt={alt}
          className="block max-h-[80vh] w-auto object-contain"
        />
      </div>
    </dialog>
  );
}

// ------------ Gallery ------------
function Gallery({
  images,
}: {
  images: Array<{ src: string; alt: string; w?: number; h?: number }>;
}) {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((img, i) => (
          <li key={i}>
            <button
              className="group block w-full overflow-hidden rounded-xl focus:outline-none focus:ring-2"
              onClick={() => setActive(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          </li>
        ))}
      </ul>
      {active !== null && (
        <Lightbox
          src={images[active].src}
          alt={images[active].alt}
          onClose={() => setActive(null)}
        />
      )}
    </div>
  );
}

// ------------ Badge ------------
const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium mr-2 mb-2 text-police bg-paper/70">
    {children}
  </span>
);

// ------------ JSON-LD ------------
function JsonLd({ data }: { data: Record<string, any> }) {
  const json = useMemo(() => JSON.stringify(data), [data]);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}

// ------------ Main Page ------------
export default function ProjectDetailWOT() {
  const project = {
    title: "Operation Neptune – IoT Escape Game",
    subtitle:
      "A cold war submarine escape game where players race through five connected IoT challenges — powered by Raspberry Pis, Arduinos, MQTT and a central admin panel — to stabilise systems and launch a final torpedo before time runs out.",
    period: "Sept 2024 – Jan 2025",
    role: "Team lead, IoT developer & experience designer (Squad #3)",
    location: "Artevelde University of Applied Sciences – Ghent, BE",
    status: "No public live demo (physical installation with full dossier)",
  } as const;

  const highlights = [
    "Five sequential hardware challenges forming one coherent mission arc",
    "Central Main Admin Pi dashboard to start, monitor, reset and send hints",
    "MQTT-based communication between Pis, Arduinos, props and UI",
    "Camera, soundscape and tips integrated for immersion and control",
  ];

  const stack = [
    "Raspberry Pi",
    "Arduino Leonardo",
    "Python",
    "TypeScript",
    "Node.js",
    "MQTT",
    "WebSockets",
    "Tailwind CSS",
    "Custom sensors & RFID",
  ];

  const images = [
    {
      src: "/wot/image1.jpg",
      alt: "Overview of Operation Neptune escape game setup",
    },
    {
      src: "/wot/image2.jpg",
      alt: "Alarm and control panel for the opening challenge",
    },
    { src: "/wot/image3.jpg", alt: "Power patch panel and cabling puzzle" },
    {
      src: "/wot/image4.jpg",
      alt: "Sonar station with webcam-based card scanning",
    },
    { src: "/wot/image5.png", alt: "RFID naval map puzzle in progress" },
    {
      src: "/wot/image6.jpg",
      alt: "Torpedo launch box with three potentiometers",
    },
  ];

  const sampleSnippet = `# Raspberry Pi MQTT logic for Challenge 5 (Torpedo Launch)
import time
import serial
import paho.mqtt.client as mqtt

MQTT_BROKER = "192.168.0.224"
MQTT_PORT = 1883
CHALLENGE_ID = 5

SERIAL_PORT = "/dev/ttyACM0"
BAUD_RATE = 9600

targetValue = 500
tolerance = 100

led_on = False
button_pressed = False
challenge_started = False

def on_connect(client, userdata, flags, rc):
    client.subscribe(f"escapeGame/challenge{CHALLENGE_ID}/status")

def on_message(client, userdata, msg):
    global challenge_started
    payload = msg.payload.decode()
    if payload == "start":
        challenge_started = True
    elif payload == "notstarted":
        challenge_started = False
        reset_game_state()

def setup_mqtt():
    client = mqtt.Client()
    client.on_connect = on_connect
    client.on_message = on_message
    client.connect(MQTT_BROKER, MQTT_PORT, 60)
    client.loop_start()
    return client

def reset_game_state():
    global led_on, button_pressed
    led_on = False
    button_pressed = False
    print("Game state reset")

def initialize_serial():
    ser = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)
    time.sleep(1)
    ser.write(b"0")  # ensure LED off
    return ser

def main():
    global led_on, button_pressed, challenge_started
    client = setup_mqtt()
    ser = initialize_serial()

    # Wait for the operator to start the challenge
    while not challenge_started:
        time.sleep(0.5)

    # Main game loop
    while challenge_started and not button_pressed:
        if ser.in_waiting > 0:
            data = ser.readline().decode("utf-8").strip()
            parts = data.split(",")

            if len(parts) == 4:
                try:
                    pot1, pot2, pot3 = map(int, parts[:3])
                    button_state = parts[3].strip().lower()

                    in_range = all(
                        targetValue - tolerance <= v <= targetValue + tolerance
                        for v in (pot1, pot2, pot3)
                    )

                    if in_range and not led_on:
                        ser.write(b"1")   # tell Arduino to enable launch LED
                        led_on = True
                    elif not in_range and led_on:
                        ser.write(b"0")   # disable LED if values move out of range
                        led_on = False

                    if button_state == "pressed" and in_range:
                        print("Challenge 5 solved")
                        client.publish(
                            f"escapeGame/challenge{CHALLENGE_ID}/status",
                            "solved"
                        )
                        button_pressed = True
                except ValueError:
                    print("Invalid data from Arduino")

        time.sleep(0.1)

if __name__ == "__main__":
    main()
`;

  const sampleSnippet2 = `// Arduino Leonardo – read potentiometers & button, talk to Pi
const int ledPin = 9;      // Launch button LED (active-low wiring)
const int buttonPin = 2;   // Launch button (with INPUT_PULLUP)

const int potPin1 = A0;
const int potPin2 = A1;
const int potPin3 = A2;

// Debounce
bool currentButtonState = HIGH;
bool lastButtonState = HIGH;
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelay = 10;

void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT_PULLUP);
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, HIGH); // LED off (active-low)
}

void loop() {
  // --- Debounced button state ---
  bool rawButtonState = digitalRead(buttonPin);
  if (rawButtonState != lastButtonState) {
    lastDebounceTime = millis();
  }
  if ((millis() - lastDebounceTime) > debounceDelay) {
    if (rawButtonState != currentButtonState) {
      currentButtonState = rawButtonState;
    }
  }
  lastButtonState = rawButtonState;

  // --- Potentiometer values ---
  int potValue1 = analogRead(potPin1);
  int potValue2 = analogRead(potPin2);
  int potValue3 = analogRead(potPin3);

  // Format: pot1,pot2,pot3,pressed|not pressed
  Serial.print(potValue1);
  Serial.print(",");
  Serial.print(potValue2);
  Serial.print(",");
  Serial.print(potValue3);
  Serial.print(",");
  Serial.println(currentButtonState == LOW ? "pressed" : "not pressed");

  // Listen for LED control from Pi: '1' = ON, '0' = OFF (active-low)
  if (Serial.available() > 0) {
    char incomingByte = Serial.read();
    if (incomingByte == '1') {
      digitalWrite(ledPin, LOW);  // LED on
    } else if (incomingByte == '0') {
      digitalWrite(ledPin, HIGH); // LED off
    }
  }

  delay(200);
}
`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.subtitle,
    creator: { "@type": "Person", name: "Charlotte Billiet" },
    about: highlights,
  };

  return (
    <main className="min-h-screen">
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <section className="section pt-16 pb-10 md:pt-24 md:pb-14">
        <a
          href="/projects"
          className="text-sm opacity-80 hover:opacity-100 link-underline"
        >
          ← Back to projects
        </a>
        <h1 className="title mt-4 text-3xl md:text-5xl tracking-tight">
          {project.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base md:text-lg text-ink-700">
          {project.subtitle}
        </p>

        <div className="mt-6 flex flex-wrap gap-3 items-center">
          <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-blood text-ink-700">
            {project.period}
          </span>
          <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-blood text-ink-700">
            {project.role}
          </span>
          <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-blood text-ink-700">
            {project.location}
          </span>
          <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-blood text-ink-700">
            {project.status}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/documents/Squad3-TheOperationNeptune-final.pdf"
            className="btn btn-primary inline-flex items-center rounded-xl px-4 py-2 text-sm font-semibold"
            aria-label="Download Operation Neptune postproduction dossier (PDF)"
          >
            Download full dossier (PDF)
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="section grid md:grid-cols-3 gap-8 pb-20">
        {/* Left column */}
        <div className="md:col-span-2 space-y-8">
          {/* Gallery */}
          <div>
            <h2 className="text-xl font-bold mb-3">Gallery</h2>
            <p className="text-sm mb-4 text-ink-700">
              A look at the submarine set, props and IoT-driven challenges.
            </p>
            <Gallery images={images} />
          </div>

          {/* Problem / Solution */}
          <div className="wave-card p-6">
            <h3 className="text-lg font-semibold">Problem → Solution</h3>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink">
              <p>
                <strong>Brief:</strong> Build a Web of Things escape game that
                another operator can run without us: hardware, software, reset
                flows, safety and documentation included.
              </p>
              <p>
                <strong>Concept:</strong> Operation Neptune drops a 3-person
                team inside a damaged submarine during a cold war conflict.
                Players must restore power, recalibrate sonar, locate enemy
                vessels and launch a torpedo to neutralise the threat.
              </p>
              <p>
                <strong>System:</strong> Each challenge runs on Raspberry Pis
                and Arduinos that communicate over MQTT with a central Main
                Admin Pi. The operator dashboard controls the timer, start/reset
                per challenge, and sends tips to an in-room display.
              </p>
              <p>
                <strong>Outcome:</strong> A fully working escape game with a
                central control panel, soundscape, camera integration and a
                detailed postproduction dossier so the experience is
                reproducible.
              </p>
            </div>
          </div>

          {/* What I learned */}
          <div className="wave-card p-6">
            <h3 className="text-lg font-semibold">What I learned</h3>
            <ul className="mt-4 grid gap-2 text-sm list-disc pl-5 text-ink">
              <li>
                How to <strong>lead a team</strong>: planning, delegating,
                following up and keeping everyone aligned on one shared vision.
              </li>
              <li>
                Running lightweight <strong>scrum-style standups</strong> and
                check-ins to track progress, surface blockers early and keep the
                project moving.
              </li>
              <li>
                Gaining confidence with <strong>hardware & IoT</strong>{" "}
                (Raspberry Pi, Arduino, sensors) despite starting with almost no
                electronics experience.
              </li>
              <li>
                <strong>Self-learning Python</strong> on the project: writing
                MQTT logic and integration scripts without formal classes.
              </li>
              <li>
                Creating a <strong>collaborative, creative environment</strong>{" "}
                where every teammate’s ideas were heard, challenged
                constructively, and reflected in the final experience.
              </li>
              <li>
                Staying <strong>organised under constraints</strong> (time,
                budget, hardware) and turning that structure into a smoother
                build and install.
              </li>
            </ul>
          </div>

          {/* Challenge overview */}
          <div className="wave-card p-6">
            <h3 className="text-lg font-semibold">Challenge structure</h3>
            <ol className="mt-4 space-y-3 text-sm text-ink list-decimal list-inside">
              <li>
                <strong>Alarm & Power Failure:</strong> Players react to red
                alert signals and use clues to open the fuse box and restore
                initial power.
              </li>
              <li>
                <strong>Power Patch Panel:</strong> Cable-routing puzzle with
                LED feedback where correct connections bring systems back
                online.
              </li>
              <li>
                <strong>Sonar Calibration:</strong> Webcam + cards challenge to
                recover sonar visuals.
              </li>
              <li>
                <strong>RFID Naval Map:</strong> RFID-tagged ships must be
                placed correctly on a 4x4 grid to lock enemy targets.
              </li>
              <li>
                <strong>Torpedo Launch:</strong> Three potentiometers tuned to
                the right values arm the illuminated launch button, which sends
                the final MQTT "solved" signal.
              </li>
            </ol>
          </div>
        </div>

        {/* Right column */}
        <aside className="md:col-span-1 space-y-8">
          {/* Quick facts */}
          <div className="wave-card p-6 text-sm text-ink">
            <h3 className="font-semibold mb-4">Quick facts</h3>
            <dl className="grid grid-cols-3 gap-2">
              <dt className="col-span-1 opacity-70">Scope</dt>
              <dd className="col-span-2">Semester project • Web of Things</dd>

              <dt className="col-span-1 opacity-70">Team</dt>
              <dd className="col-span-2">
                Squad #3 (6 members) – collaborative design & build
              </dd>

              <dt className="col-span-1 opacity-70">My role</dt>
              <dd className="col-span-2">{project.role}</dd>

              <dt className="col-span-1 opacity-70">Stack</dt>
              <dd className="col-span-2">{stack.join(" • ")}</dd>

              <dt className="col-span-1 opacity-70">Deliverables</dt>
              <dd className="col-span-2">
                Working game • Admin panel • Sound & camera setup • Full dossier
              </dd>
            </dl>
          </div>

          {/* My contributions */}
          <div className="wave-card p-6 text-sm text-ink">
            <h3 className="font-semibold mb-2">My contributions</h3>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Served as <strong>team lead</strong>, coordinating schedules,
                task distribution, and communication with our supervising
                lecturer.
              </li>
              <li>
                Designed the{" "}
                <strong>
                  overall storyline, prop aesthetics, and experience themes
                </strong>
                , ensuring narrative and visual consistency.
              </li>
              <li>
                Managed <strong>organisation and finances</strong> for props and
                materials, keeping milestones and budget on track.
              </li>
              <li>
                Co-authored and finalised the{" "}
                <strong>Operation Neptune dossier</strong>, consolidating
                technical, narrative and setup documentation.
              </li>
              <li>
                Provided feedback and testing support across other challenges to
                maintain a smooth player journey.
              </li>
              <li>
                Built the <strong>fifth challenge (Torpedo Launch)</strong>:
                Raspberry&nbsp;Pi + Arduino&nbsp;Leonardo reading three
                potentiometers; when all values are correct, the lit launch
                button activates and publishes the MQTT signal that ends the
                game.
              </li>
            </ul>
          </div>
        </aside>
      </section>

      {/* Collapsible code section at bottom */}
      <section className="section pb-20 space-y-4">
        <h2 className="text-sm font-semibold text-ink">
          Technical appendix (Challenge 5 – Torpedo Launch)
        </h2>
        <p className="text-xs text-ink-700 max-w-3xl">
          For reviewers who want to dive into the implementation details, here’s
          how the Raspberry&nbsp;Pi, Arduino&nbsp;Leonardo, potentiometers and
          MQTT work together to drive the final challenge.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <CollapsibleCode
            title="Raspberry Pi – MQTT & game logic"
            code={sampleSnippet}
            language="py"
          />
          <CollapsibleCode
            title="Arduino Leonardo – potentiometer reader"
            code={sampleSnippet2}
            language="cpp"
          />
        </div>
      </section>

      {/* Footer hint */}
      <footer className="section pb-24 text-xs opacity-70">
        <p>
          Optional: embed a short demo video of the game flow here for extra
          context.
        </p>
      </footer>
    </main>
  );
}
